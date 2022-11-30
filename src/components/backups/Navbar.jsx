import React, { useState } from 'react';


import { IoMdClose } from 'react-icons/io';
import { TbMenu2 } from 'react-icons/tb';
import { Link } from 'react-router-dom';



const Navbar = () => {
  
       const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)


    return (
    <div name="home"className='w-full h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between item-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>ODUN ESTATE</h1>
                <ul className='hidden md:flex'>
                    <li className='cursor-pointer'><Link  to="/"  >Home
                        </Link></li>
                    <li className='cursor-pointer'><Link  to="/about" >About 
                    </Link></li>
                    <li className='cursor-pointer'><Link  to="/support">Support
                    </Link></li>
                    <li className='cursor-pointer'><Link  to="/all" >Platform
                    </Link></li>

                    <li className='cursor-pointer'><Link  to="/pricing">Pricing
                    </Link></li>



                   
                </ul>
            </div>
            <div className="hidden md:flex p-4">
                <button  className="border-none bg-transparent text-black mr-4"  ><Link to="/SignIn">Sign In</Link></button>
                <button className="px-8 py-3"><Link to="/SignUp">Sign Up</Link></button>
            </div>
            <div className="md:hidden py-7" onClick={handleClick}>
                {!nav ? <TbMenu2 className='' /> : <IoMdClose />}
            </div>
        </div>
        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full h-screen px-8'}>
                    <li><Link onClick={handleClose} to="/" smooth={true}  duration={500} >Home </Link></li>
                   
                    <li className='border-b-2 border-zinc-300 w-full h'><Link to="/about"onClick={handleClose}>About 
                    </Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link  to="/support" onClick={handleClose}>Support
                    </Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link  to="/all" onClick={handleClose}>Platform
                    </Link></li>

                    <li className='border-b-2 border-zinc-300 w-full'><Link to="/pricing" onClick={handleClose} >Pricing
                    </Link></li>


             
        <div className="flex flex-col my-4">
            <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4" ><Link to="/SignIn">Sign In</Link></button>
            <button className="px-8 py-3"><Link to="/SignUp">Sign Up</Link></button>
        </div>
        </ul>
    
    </div>
  )
}

export default Navbar