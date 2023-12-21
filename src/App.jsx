import Player from './Player.jsx'

function App() {
  return (
    <div className='flex h-screen w-full flex-col bg-rose-200'>
      <div className='h-2 bg-rose-500' />
      <div className='flex grow items-center justify-center'>
        <div className='w-5/6 max-w-[48rem] overflow-hidden rounded-lg bg-white shadow-lg'>
          <div className='w-full p-8'>
            <h1 className='pb-4 text-center text-3xl'>Pink Noise Generator</h1>
            <Player />
          </div>
        </div>
      </div>
      <footer className='flex items-center justify-center text-rose-600'>
        <p className='py-4'>
          Created by{' '}
          <a
            href='https://maijsgarais.com/'
            className='underline hover:font-bold'
            target='_blank'
            rel='noreferrer'
          >
            Maijs Garais
          </a>
          .
        </p>
      </footer>
    </div>
  )
}

export default App
