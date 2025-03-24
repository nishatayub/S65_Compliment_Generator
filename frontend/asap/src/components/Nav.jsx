import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <div className='flex justify-between border-pink-800 border-2'>
    <div className='font-bold text-pink-900 mt-4 ml-10'>
    PraisePal
    </div>
      <ul className='flex gap-18 text-pink-800 mt-4 in-hover:cursor-pointer'>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
       <Link to='/login' className='bg-pink-900 rounded-3xl w-20 h-7 ml-10 mr-10 mt-4 text-white mb-2 in-hover:cursor-pointer hover:bg-pink-700 flex justify-center'> Log In </Link>
    </div>
    </>
)}

export default Nav
