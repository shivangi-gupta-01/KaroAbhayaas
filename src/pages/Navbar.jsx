import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person3Icon from '@mui/icons-material/Person3';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between bg-white shadow-lg items-center p-4 md:p-6'>
    <p className='text-2xl font-bold ml-2 md:ml-7 mb-2 md:mb-0'><Link to='/'>Karo Abhayaas</Link></p>
    <ul className='flex justify-center md:justify-start gap-2 md:gap-5'>
    <li className='bg-black text-white px-2 py-1 md:px-3 md:py-2 rounded-sm text-xs md:text-sm overflow-hidden'>
  Join Us
</li>

        <li className='text-gray-400 text-md md:text-lg'><Link to='/video'>Classes</Link></li>
        <li className='text-gray-400 text-md md:text-lg'><Link to='/products'>Products</Link></li>
        <li className='text-gray-400 text-md md:text-lg'><Link to='/about'>About Us</Link></li>
        <li><Link to='/profile'><Person3Icon className='h-6 w-6 md:h-8 md:w-8'/></Link></li>
        <li><Link to='/cart'><ShoppingCartIcon className='h-6 w-6 md:h-8 md:w-8'/></Link></li>
    </ul>
</div>

  )
}

export default Navbar