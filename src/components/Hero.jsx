import hero from '../assets/hero.png'
import node from '../assets/node.png'
import nextjs from '../assets/nextjs.png'
import vuejs from '../assets/vuejs.png'
import expressjs from '../assets/expressjs.png'
import php from '../assets/php.png'
import laravel from '../assets/laravel.png'
import react from '../assets/react.png'
import redux from '../assets/redux.png'
import tailwindcss from '../assets/tailwindcss.png'

const Hero = () => {
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[100vh] justify-between' >
            <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
               <h1 className='lg:text-6xl text-4xl font-bold lg:leading-snug'>Hey! 👋 
                <br />
                The name is <span className='text-purple-600 font-bold'>Solah</span> ;)
               </h1>
            </div>
            <div className='md:w-1/2 relative flex justify-center items-end'>
              <img src={hero} alt="hero" className='lg:h-[90vh] h-96' />
              <img src={node} alt="node" className='absolute w-10 top-0 left-4 md:left-36 rounded-full'/>
              <img src={php} alt="php" className='absolute w-10 top-96 left-8 rounded-full'/>
              <img src={react} alt="react" className='absolute w-10 top-36 left-0 rounded-full'/>
              <img src={laravel} alt="laravel" className='absolute w-10 top-24 md:top-48 right-1'/>
              <img src={redux} alt="redux" className='absolute w-10 top-0 right-5'/>
              <img src={nextjs} alt="nextjs" className='absolute w-10 rounded-full right-[-2rem] md:right-16 top-80'/>
              <img src={vuejs} alt="vuejs" className='absolute w-10 bottom-24 md:bottom-80 right-4'/>
              <img src={tailwindcss} alt="tailwindcss" className='absolute w-10 rounded-full right-0 bottom-44 md:bottom-46'/>
              <img src={expressjs} alt="expressjs" className='absolute w-10 bottom-12 md:bottom-56 left-[-2rem] md:left-4 rounded-full'/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero