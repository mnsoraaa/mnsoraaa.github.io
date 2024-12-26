import lottie from 'lottie-react'
import contact from '../assets/contact.json'

const Contact = () => {
  return (
    <section id='contact' className='z-50 bg-gray-800 relative py-10 px-5 md:px-0'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
            <h2 className='text-2xl font-bold mb-3 text-purple-600'>Get in Touch</h2>
            <p className='mb-4 text-xl text-gray-500'>I'm always open to new opportunities and collaboration. Feel free to reach out!</p>
            <lottie animationData={contact} className='w-[350px] mx-auto lg:w-[500px]'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact