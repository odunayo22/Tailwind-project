import React from 'react';

const SignUp = () => {
  return (
    <div name="" className='w-screen bg-slate-300 text-black-300 py-5 md:justify-center'>
           <div className="py-8 grid">
            <form action="" className="m-2">
              <div className='my-9 justify-center flex'>
              <label className='text-2xl ml-3'>Email</label>
                <input type="email" className="mx-10 w-70 h-10 text-2xl rounded mr-3" placeholder='Enter your email' required/>
                </div>

                <div className='my-9 justify-center flex'>
              <label className='text-2xl ml-3'>Phone Number</label>
                <input type="email" className="mx-10 w-70 h-10 text-2xl rounded mr-3" placeholder='Enter your number' required/>
                </div>

                <div className='my-9 justify-center flex'>
              <label className='text-2xl ml-3'>Address</label>
                <input type="email" className="mx-10 w-70 h-10 text-2xl rounded mr-3" placeholder='Enter your Address' required/>
                </div>
                <div className='my-9 justify-center flex'>
              <label  className="text-2xl ml-3">Password</label>
                <input type="password" className="mx-10 w-70 h-10 text-2xl rounded mr-3" required placeholder='Password' />
                </div>
                <div className='my-9 justify-center flex font-bold text-xl '>
                <button type="submit" className='bg-slate-800 px-2'>LOG IN</button>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default SignUp