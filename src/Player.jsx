import { useRef, useState, useEffect } from 'react'
import './playerstyles.css'
import './noise'
import 'toolcool-range-slider'
import PauseIcon from './PauseIcon.jsx'
import PlayIcon from './PlayIcon.jsx'

const Player = () => {
  const audioContext = useRef(null)
  const gainNode = useRef(null)
  const sliderRef = useRef(null)
  const [volume, setVolume] = useState(0.5)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleVolumeChange = newVolume => {
    setVolume(newVolume)
    if (gainNode.current && audioContext.current) {
      gainNode.current.gain.setValueAtTime(
        newVolume,
        audioContext.current.currentTime
      )
    }
  }

  useEffect(() => {
    const slider = sliderRef.current

    const onChange = evt => {
      const newVolume = evt.detail.value
      handleVolumeChange(newVolume)
    }

    slider?.addEventListener('change', onChange)

    return () => {
      slider?.removeEventListener('change', onChange)
    }
  }, [])

  const togglePlaying = () => {
    if (audioContext.current === null) {
      // Create AudioContext if it doesn't exist
      audioContext.current = new (window.AudioContext ||
        window.webkitAudioContext)()
      gainNode.current = audioContext.current.createGain()
      const pinkNoiseNode = audioContext.current.createPinkNoise(4096)
      pinkNoiseNode
        .connect(gainNode.current)
        .connect(audioContext.current.destination)

      gainNode.current.gain.setValueAtTime(
        volume,
        audioContext.current.currentTime
      )
      setIsPlaying(true)
    } else {
      // Stop audio and close the AudioContext
      audioContext.current.close().then(() => {
        audioContext.current = null
        setIsPlaying(false)
      })
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
      <div className='mx-4 mt-4 flex items-center justify-center'>
        <label className='mr-2'>Volume:</label>
        <tc-range-slider
          value={volume}
          min='0'
          max='1'
          step='0.01'
          ref={sliderRef}
          slider-bg-fill='#e11d48'
        />
      </div>
    </>
  )
}

export default Player
