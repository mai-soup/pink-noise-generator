import Player from './Player.jsx'

function App() {
  return (
    <div className='flex h-screen w-full flex-col bg-rose-200'>
      <div className='h-2 bg-rose-500' />
      <div className='flex grow items-center justify-center'>
        <div className='w-5/6 max-w-[48rem] overflow-hidden rounded-lg bg-white shadow-lg'>
          <div className='w-full p-8'>
            <Player />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
