import Cards from './Cards'

const Experiences = () => {
    const experiencesJson = [
        // {
        //   title: 'Portfolio',
        //   desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
        //   image: Portfolio,
        //   live: "https://rohitsingh93300-portfolio.vercel.app/",
        //   github: "https://github.com/rohitsingh93300/portfolio"
        // },
        // {
        //   title: 'Spicy Bites',
        //   desc: 'The team at Webelite Builders exceeded our expectations with their digital marketing expertise. Highly recommend!',
        //   image: SpicyBites,
        //   live: "https://spicybites.netlify.app/",
        //   github: "https://github.com/rohitsingh93300/YtSpicyBites"
        // },
        // {
        //   title: 'YouTube Clone',
        //   desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
        //   image: Youtube,
        //   live: "https://youtube-clone-93300.netlify.app/",
        //   github: "https://github.com/rohitsingh93300/YouTube-clone"
        // },
        // {
        //   title: 'Webelite builder',
        //   desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
        //   image: Webelite,
        //   live: "https://www.webelitebuilders.com/",
        //   github: "#"
        // },
        // {
        //   title: 'Super Car',
        //   desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
        //   image: Supercar,
        //   live: "https://supercar123.netlify.app/",
        //   github: "https://github.com/rohitsingh93300/supercars"
        // },
      ];

  return (
    <section className='relative bg-white py-10 py-4 border-t border-purple-600' id='experiences' >
      <div className="py-12">
        <div className='text-center md:text-left max-w-7xl mx-auto md:mx-56 px-4 sm:px-6 lg:px-8'>
            <div className='text-center'>
                <h2 className='text-2xl text-purple-600 font-semibold tracking-wide uppercase'>Experiences</h2>
                <p className='max-w-2xl text-xl text-gray-500 lg:mx-auto'>
                  Aaaahhh... I'm getting older.
                </p>
            </div>
        </div>
        <div className='mt-10 text-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
              {experiencesJson.map((items)=> {
                  return <Cards item={items}/>
              })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences