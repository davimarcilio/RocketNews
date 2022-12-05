import Arrow from './assets/arrow-right.svg';
import Read from './assets/read_news.jpg';
import './styles/App.css';
import Header from './components/Header';
import RightImg from './components/RightImg';
import Form from './components/Form';

export default function App() {
  return (
    <main>
      <div className='bg-black absolute h-full pl-7 w-1/2 max-md:w-full z-10' >
        <Header />
        <main className='flex flex-col gap-2'>
          <h1 className='text-title-color font-WorkSans font-bold text-2xl mt-24'>atualize ideias e informações em 5 minutos.</h1>
          <h2 className='text-white text-sm font-Spartan font-bold'>tudo que você precisa saber para começar seu dia bem e informado</h2>
          <p className='text-text-color font-Spartan text-sm'>noticias sobre o universo Rocketseat, e tudo o que precisa para começar o dia melhor. <br />
            perfeito para se preparar para codar ☕</p>
        </main>
        <Form />
        <section className='mt-12'>
          <h1 className='transition-all font-Spartan font-bold text-button-color text-sm hover:text-button-color-hover'><a className='flex flex-row' href="https://github.com/davimarcilio" rel='noreferrer' target='_blank'>deixe-me ler primeiro <img src={Arrow} alt="arrow" /></a></h1>
        </section>
      </div>
      <RightImg img={Read} />
    </main>
  );
}

