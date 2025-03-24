import Nav from './Nav'
import Unknown2 from '/assets/Unknown-2.jpg?url';
import AboutUs from './AboutUs';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Hero = () => {
  return (
    <div>
      <Nav />
      <div className='h-screen'>
      <div className='flex justify-evenly mt-20'>
      <p className='font-extrabold text-6xl w-90 text-pink-700'> <strong className='text-pink-900 text-7xl'> PraisePal  </strong>for whenever you feel unconfident</p>
      <img src={Unknown2} alt="window1" className='h-90 w-90 rounded-4xl shadow-red-500 shadow-2xl border-4 border-red-800' />
      </div>
      <div className='flex justify-evenly mt-20'>
      <Link to='signup' className='bg-pink-900 text-amber-50 w-40 h-16 rounded-4xl hover:bg-pink-700 in-hover:cursor-pointer items-center flex justify-center'> Get Started &nbsp; &rarr; </Link>
      <Link to='sendcompliment' className='bg-pink-900 text-amber-50 w-60 h-16 rounded-4xl hover:bg-pink-700 in-hover:cursor-pointer items-center flex justify-center'>Send a Compliment</Link>
      <Link to='receivecompliment' className='bg-pink-900 text-amber-50 w-60 h-16 rounded-4xl hover:bg-pink-700 in-hover:cursor-pointer items-center flex justify-center'>Receive a Compliment</Link>
      </div>
      <AboutUs/>
      <Footer/>
      </div>
    </div>
  )
}

export default Hero
