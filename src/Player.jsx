import { useRef, useState } from 'react'
import './playerstyles.css'
import './noise'

const Player = () => {
  const audioContext = useRef(null)
  const bufferSize = 4096
  const [volume, setVolume] = useState(0.5)

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
      pinkNoiseNode.start()
    } else {
      // Stop audio and close the AudioContext
      audioContext.current.close().then(() => {
        audioContext.current = null
      })
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
      <div>
        <button onClick={togglePlaying}>Pause/play</button>
      </div>
    </>
  )
}

export default Player
