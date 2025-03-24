import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-pink-900 text-amber-50 text-center py-6 mt-20'>
      <p className='text-lg'>&copy; {new Date().getFullYear()} PraisePal. All rights reserved.</p>
      <div className='flex justify-center mt-2 space-x-4'>
        <Link to='/privacy' className='hover:text-amber-300'>Privacy Policy</Link>
        <Link to='/terms' className='hover:text-amber-300'>Terms of Service</Link>
        <Link to='/contact' className='hover:text-amber-300'>Contact Us</Link>
      </div>
    </footer>
  );
};

export default Footer;