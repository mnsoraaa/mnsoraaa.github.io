const List = ({ item }) => {
    return (
        <div className='relative mb-6 sm:mb-0'>
            <div className='flex items-center'>
                <div className='z-10 flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full ring-0 ring-white shrink-0'>
                    <svg className='w-2.5 h-2.5 text-purple-800' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'>
                        <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z'/>
                    </svg>
                </div>
                <div className='hidden sm:flex w-full bg-gray-200 h-0.5 ml-1'></div>
            </div>
            <div className='mt-3 sm:pe-8'>
                <h3 className='text-lg font-semibold'>{item.title}</h3>
                <time className='block mb-2 text-sm font-normal leading-none text-gray-400'>{item.duration}</time>
                <p className='text-base font-normal text-gray-500'>{item.description}</p>
            </div>
        </div>
    )
}

export default List