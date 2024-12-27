import List from './List'

const Experiences = () => {
  const experiencesJson = [
    {
      title: 'Synthesis Integration Sdn Bhd',
      duration: '2015-2016',
      description: 'Internship as junior programmer for a property management system.'
    },
    {
      title: 'LA Studios',
      duration: '2018-2019',
      description: 'Web Developer for a Shopify Partner company. Customized and manage customer online store.'
    },
    {
      title: 'Data Brain Sdn Bhd',
      duration: '2019-2020',
      description: 'Fullstack Developer for an e-commerce system which consists of supplier, agent and stockist.'
    },
    {
      title: 'Shoppego Sdn Bhd',
      duration: '2020-Present',
      description: 'An e-commerce company, and also acting as inventory management system which the system integrate with third party providers to sell customer products.'
    },
  ];

  return (
    <section className='relative bg-white py-10 py-4 border-t border-purple-600' id='experiences' >
      <div className='py-12'>
        <div className='max-w-7xl mx-auto md:mx-56 px-4 sm:px-6 lg:px-8'>
            <div className='text-center'>
                <h2 className='text-2xl text-purple-600 font-semibold tracking-wide uppercase'>Experiences</h2>
                <p className='max-w-2xl text-xl text-gray-500 lg:mx-auto'>
                  Aaaahhh... I'm getting older.
                </p>
            </div>
            <div className='mt-10 text-left'>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
                {experiencesJson.map((item, index) => {
                  return <List key={index}  item={item} />
                })}
               </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences