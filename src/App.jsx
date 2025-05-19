function App() {

  return (
    <>
    <div className='w-screen h-screen bg-fa font-[Inria+Sans] overflow-x-hidden scroll-smooth'>
      <header className='w-screen h-15 bg-[#1A4362]/60 flex flex-row items-center md:fixed md:justify-around conatiner'>
        <menu className='flex flex-col gap-1 ml-2 md:hidden'>
          {/* SOMENTE NO MOBILE */}
          <div className='w-8 h-2 bg-fw rounded-full'></div>
          <div className='w-8 h-2 bg-fw rounded-full'></div>
          <div className='w-8 h-2 bg-fw rounded-full'></div>
        </menu>
          
        <div id="logo" className='flex flex-row gap-1 flex-1 mr-3 justify-center items-center md:justify-start md:items-center md:flex-none'>
          <picture className='w-15 h-auto md:ml-10'><img src='/src/assets/felbzinha.png' /></picture>
          <div className='text-fv font-[K2D] font-bold text-4xl md:hidden'>F E L B</div>
        </div>

            {/* LISTA PARA APARECER NO PC */}
          <ul className='hidden md:flex flex-row list-none text-fw gap-8'>
            <li><a href="#home">HOME</a></li>
            <li><a href="#aboutUs">CONHEÇA-NOS</a></li>
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

      <section className='w-screen flex flex-col md:flex-row-reverse justify-center items-center bg-fa mb-10 md:mt-12 md:justify-evenly'>
        <picture className=''><img src="./src/assets/felb.png" alt="Logo FELB Víbora fumando"/></picture>
        <div className='flex flex-col justify-center items-center'>
        <h1 id='home' className='text-5xl text-center font-[K2D] font-bold text-fv mt-1 mb-2 md:text-8xl md:max-w-180 md:text-left md:mb-10'>Força Expedicionária Luso-Brasileira</h1>
        <span className='text-md text-center font-bold text-fw md:text-2xl'>A maior comunidade WARDEN luso-brasileira!<br/> "A Víbora vai fumar"</span>
        </div>
      </section>

      <section className='flex flex-col items-center'>
        <h1 id="aboutUs" className="text-3xl font-[K2D] font-bold text-fv">QUEM SOMOS?</h1>
        <span className="p-4 text-fw text-[1.1rem]">Em 2021, nosso saudoso Capitão Neville entrava para FoxHole e pouco tempo depois, no mesmo ano, funda a FELB no intuito de juntar a maior número de pessoas luso-brasileira possível para assim criar uma comunidade fluente em português dentro do jogo. Hoje a FELB está com quase 4 anos de atividade e ajudou a vencer incontáveis guerras pela facção Warden. Nos estamos sempre evoluindo e ajudando novatos a se integrar dentro do jogo. Junte-se a nós soldado! Venha fazer parte dessa grande comunidade e vencer guerras ao nosso lado!</span>
      </section>
      <div className="h-100"></div>
    </div>
    
    </>
  )
}

export default App
