import { useRef, useState } from 'react'
import './playerstyles.css'
import './noise'
import PauseIcon from './PauseIcon.jsx'
import PlayIcon from './PlayIcon.jsx'

const Player = () => {
  const audioContext = useRef(null)
  const bufferSize = 4096
  const [volume, setVolume] = useState(0.5)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlaying = () => {
    if (audioContext.current === null) {
      // Create AudioContext if it doesn't exist
      audioContext.current = new (window.AudioContext ||
        window.webkitAudioContext)()
      const pinkNoiseNode = audioContext.current.createPinkNoise(
        bufferSize,
        volume
      )
      pinkNoiseNode.connect(audioContext.current.destination)
      setIsPlaying(true)
    } else {
      // Stop audio and close the AudioContext
      audioContext.current.close().then(() => {
        audioContext.current = null
      })
      setIsPlaying(false)
    }
  }

  const handleVolumeChange = event => {
    const newVolume = parseFloat(event.target.value)
    setVolume(newVolume)
    if (audioContext.current !== null) {
      // If AudioContext is active, update volume in real-time
      const pinkNoiseNode = audioContext.current.createPinkNoise(
        bufferSize,
        newVolume
      )
      pinkNoiseNode.connect(audioContext.current.destination)
      pinkNoiseNode.start()
    }
  }

  return (
    <>
      <div className='flex items-center justify-center'>
        <button
          onClick={togglePlaying}
          className='flex h-24 w-24 items-center justify-center rounded-full bg-rose-500 text-white hover:bg-rose-400 active:bg-rose-600'
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
    </>
  )
}

export default Player
