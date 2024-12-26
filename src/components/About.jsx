const About = () => {
    return (
        <section className='relative bg-white py-10 py-4 border-t border-purple-600' id='about'>
            <div className='py-12'>
                <div className='text-center md:text-left max-w-7xl mx-auto md:mx-56 px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h2 className='text-2xl text-purple-600 font-semibold tracking-wide uppercase'>About Me</h2>
                        <p className='max-w-2xl text-xl text-gray-500 lg:mx-auto'>
                            A little bit of what's what.
                        </p>
                    </div>
                    <div className='mt-10 text-xl text-center'>
                        <p className='md:text-2xl mb-4 font-bold'>Fullstack Developer</p>
                        <div className="flex flex-col md:text-left md:flex-row justify-between">
                            <div className="md:w-1/2">
                                <p className='mb-4'>
                                    Short name Solah. Long name Solaaahhh. I'm mainly a web develepor. 
                                    Yet, my first program was a Dynamic-link library (DLL) using C# .NET when I was 14 years old <span className='text-purple-600 font-bold'>*lol*</span>. 
                                    Thus, I'm used to various type of programming language such as PHP, Typescript, Phyton and some famous frameworks out there.
                                </p>
                            </div>
                            <div className="md:w-1/2">
                                <p className='mb-4'>
                                    On the other side <span className='text-purple-600 font-bold'>*pun intended*</span>, I'm also exposed myself to games development and mobiles development. 
                                    Moreover, I do have experienced in Virtual Reality, Augmented Reality, and Artificial Intelligent training.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About