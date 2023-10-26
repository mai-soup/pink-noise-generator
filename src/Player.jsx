import AudioPlayer from 'react-h5-audio-player'
import './playerstyles.css'

const Player = () => {
  return (
    <>
      <div className='flex justify-between'>
        <div>
          <h3 className='text-2xl font-medium'>Pink Noise</h3>
        </div>
      </div>
      <AudioPlayer
        src={'src'}
        showJumpControls={false}
        customAdditionalControls={[]}
        customProgressBarSection={[]}
        layout='stacked-reverse'
      />
    </>
  )
}

export default Player
