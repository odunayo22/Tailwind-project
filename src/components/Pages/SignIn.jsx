import React, {useState} from 'react';
import { IoMdClose } from 'react-icons/io';
import { Link as Link1 } from 'react-router-dom';


const SignIn = () => {
  
  
  return (
    
          <div name="signin" id="sign" className='w-screen text-black-300 py-5 md:justify-center translate-x-2'>
           <div className="py-8 grid">
            <form action="" className="my-10 mx-10  h-[400px]  bg-slate-300">
            <div>
              <Link1  to=""> <IoMdClose className='my-2 mx-2'></IoMdClose></Link1>
              </div>
              <div className='my-9 justify-center flex'>
              <label className='text-2xl mx-2'>Email</label>
                <input type="email" className="mx-10 w-70 h-10 text-2xl rounded" placeholder='Enter your email' required/>
                </div>
                <div className='my-9 justify-center flex'>
              <label  className="text-2xl mx-2">Password</label>
                <input type="password" className="mx-10 w-70 h-10 text-2xl rounded" required placeholder='Password' />
                </div>
                <div className='my-9 justify-center flex font-bold text-xl '>
                <button type="submit" className='bg-slate-800 px-2'>LOG IN</button>
                </div>
                
            </form>
        </div>
    </div>
    
  )
}

export default SignIn