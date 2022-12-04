import Logo from './assets/logo.svg';
import Send from './assets/send.svg';
import Arrow from './assets/arrow-right.svg';
import Read from './assets/read_news.jpg';
import './styles/App.css';

export default function App() {
  return (
    <div>
      <section className='absolute top-0 right-0 w-9/12 h-full max-md:hidden'>
        <img className='w-full h-full' src={Read} alt="Old Man" />
      </section>
      <div className='bg-black absolute h-full pl-7 w-1/2 max-md:w-full z-10' >
        <header>
          <img className='mt-12 w-96' src={Logo} alt="logo" />
        </header>
        <main className='flex flex-col gap-2'>
          <h1 className='text-title-color font-WorkSans font-bold text-2xl mt-24'>atualize ideias e informações em 5 minutos.</h1>
          <h2 className='text-white text-sm font-Spartan font-bold'>tudo que você precisa saber para começar seu dia bem e informado</h2>
          <p className='text-text-color font-Spartan text-sm'>noticias sobre o universo Rocketseat, e tudo o que precisa para começar o dia melhor. <br />
            perfeito para se preparar para codar ☕</p>
        </main>
        <form className='mt-12 max-md:pr-7 flex flex-col gap-4'>
          <h1 className='text-form-color font-Spartan font-bold text-sm'>Insira seu e-mail:</h1>
          <div className='relative h-12 max-md:w-full w-[120%] drop-shadow-3xl'>
            <span className='h-full bg-title-color w-1 absolute'></span>
            <input className='p-4 h-full w-full' type="email" placeholder='oi@rocketseat.com' />
            <button className='transition-all absolute right-0 top-0 bg-button-color p-3 hover:bg-button-color-hover'><img src={Send} alt="send" /></button>
          </div>
        </form>
        <section className='mt-12'>
          <h1 className='transition-all font-Spartan font-bold text-button-color text-sm hover:text-button-color-hover'><a className='flex flex-row' href="">deixe-me ler primeiro <img src={Arrow} alt="arrow" /></a></h1>
        </section>
      </div>

    </div>
  );
}

