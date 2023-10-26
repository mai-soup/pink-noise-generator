import Player from './Player.jsx'

function App() {
  return (
    <div className='w-full h-screen flex flex-col bg-rose-200'>
      <div className='h-2 bg-rose-500' />
      <div className='flex items-center justify-center grow'>
        <div className='bg-white shadow-lg rounded-lg w-5/6 max-w-[48rem] overflow-hidden'>
          <div className='w-full p-8'>
            <Player />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
