import Github from '../assets/github.png'

const Cards = ({ item }) => {
    return (
        <div className='border border-purple-500 rounded-lg w-[350px] lg:w-[400px] bg-purple-50'>
            <img src={item.image} alt="" className='rounded-lg' />
            <div className='p-4'>
                <h1 className='font-semibold text-xl mb-2'>{item.title}</h1>
                <p>{item.desc}</p>
                <div className='flex gap-3 mt-4 text-center'>
                    <button className='bg-purple-500 text-white px-3 py-2 rounded-md'><a href={item.live} target='_blank'>Preview</a></button>
                </div>
            </div>
        </div>
    )
}

export default Cards
