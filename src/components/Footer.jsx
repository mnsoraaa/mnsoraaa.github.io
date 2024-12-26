const Footer = () => {
  const year = new Date().getFullYear();
  const name = 'Solaaahhh';

  return (
    <footer className='bg-gray-100 py-4 relative'>
      <div className='container mx-auto px-4 text-center'>
        <p>&copy; {year} crafted with 💻 by <span className="text-purple-600">Solaaahhh</span></p>
      </div>
    </footer>
  )
}

export default Footer