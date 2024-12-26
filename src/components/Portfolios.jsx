import Cards from "./Cards"

const Portfolios = () => {
    const portfoliosJson = [
        {
          title: 'InMS',
          desc: 'This is Industrial Training Mangement System(InMS). It is one of the system that I\'ve developed based on the famous Laravel framework.',
        },
        {
          title: 'STAR PMS',
          desc: 'Is a web base property management system, which consists of Property Sales, Tenancy/Rental, Ownership (Join Management Body) and Project Accounting Solutions.',
        },
        {
          title: 'Shopify Partner',
          desc: 'Shopify.com is an e-commerce platform to start, run and grow a business. Managed, designed and developed shopify plugins which integrate with Facebook SDK for the customer\'s shop.',
        },
        {
          title: 'Omae Wa Mou Shindeiru!',
          desc: 'This is an Augmented Reality(AR) project. An animated ninja characters fighting each other when they\'re close enough to fight. This application will detect the marker to view the 3D model respectively on the real world point of view through android. Nanii !?',
        },
        {
          title: 'RAAAAUUUUGHHHH BRAAAAINS!!!',
          desc: 'This is a Virtual Reality(VR) zombie shooter game. Player able to walk around in virtual world and shoot those raauugghh guys. This game been develop using Unity with C# programming language. In addition, this game have been developed using Google VR SDK.',
        },
      ];

    return (
        <section className='relative bg-white py-10 py-4 border-t border-purple-600' id='experiences' >
            <div className="py-12">
                <div className='text-center md:text-left max-w-7xl mx-auto md:mx-56 px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h2 className='text-2xl text-purple-600 font-semibold tracking-wide uppercase'>Portfolios</h2>
                        <p className='max-w-2xl text-xl text-gray-500 lg:mx-auto'>
                            Did you know ? Apart from mother nature, bugs also live in codes.
                        </p>
                    </div>
                </div>
                <div className='mt-10 text-center'>
                    <div className='grid justify-between grid-cols-1 md:grid-cols-3 place-items-center gap-3 mx-56'>
                        {portfoliosJson.map((items)=> {
                            return <Cards item={items}/>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolios