import './App.css'

function App() {

  return (
    <>
    <div className='w-screen h-screen bg-fa font-[Inria+Sans]'>
      <header className='w-screen h-15 bg-[#1A4362]/60 flex flex-row items-center fixed md:justify-around conatiner'>
        <menu className='flex flex-col gap-1 ml-2 md:hidden'>
          {/* SOMENTE NO MOBILE */}
          <div className='w-8 h-2 bg-fw rounded-full'></div>
          <div className='w-8 h-2 bg-fw rounded-full'></div>
          <div className='w-8 h-2 bg-fw rounded-full'></div>
        </menu>
          
        <div id="logo" className='flex flex-row gap-1 flex-1  justify-center items-center md:justify-start md:items-center md:flex-none'>
          <picture className='w-15 h-auto md:ml-10'><img src='/src/assets/felbzinha.png' /></picture>
          <div className='text-fv font-[K2D] text-4xl md:hidden'>F E L B</div>
        </div>

            {/* LISTA PARA APARECER NO PC */}
          <ul className='hidden md:flex flex-row list-none text-fw gap-8'>
            <li><a href="#">HOME</a></li>
            <li><a href="#">CONHEÇA-NOS</a></li>
            <li><a href="#">JORNAL</a></li>
            <li><a href="#">MEDALHAS</a></li>
            <li><a href="#">DISCORD</a></li>
          </ul>
            {/* LOGIN */}
          <ul className='hidden md:flex flex-row list-none text-fv gap-4'>
            <li><a href="#">ENTRAR</a></li>
            <li><a href="#">REGISTRAR</a></li>
          </ul>
      </header>
    </div>
    
    </>
  )
}

export default App
