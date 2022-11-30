import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';




import bgImg from '../assets/house1.jpg';
import bgImg2 from '../assets/interior-1.jpg';
import { Link as Link1 } from 'react-router-dom';

function Hero() {
  return (
    <div name="hero" className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className="text-2xl">Estate Management Services</p>
                <h1 className="py-3 text-5xl md:text-7xl font-bold">Unique Estate</h1>
                <p className='text-2xl'>This is our real Estate</p>
                <button className="py-3 px-6 sm:w-[60%] my-4"><Link1 to="/SignUp">Get Started</Link1></button>
            </div>
            <div className="">
                <img src={bgImg} alt="/" className="w-full" />
            </div>
            <div className="absolute flex flex-col py-8 md:min-w-[760px] top-[80%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">
                <p className="">Data services</p>
                <div className="flex justify-between flex-wrap px-4">
                    <p className="flex px-4 py-2 text-slate-500"> < AiOutlineCloudUpload className='h-6 text-indigo-600'/>Land</p>
                    <p className="flex px-4 py-2 text-slate-500"> < AiOutlineCloudUpload className='h-6 text-indigo-600'/>Home</p>
                    <p className="flex px-4 py-2 text-slate-500"> < AiOutlineCloudUpload className='h-6 text-indigo-600'/>Fully Furnished</p>
                    <p className="flex px-4 py-2 text-slate-500"> < AiOutlineCloudUpload className='h-6 text-indigo-600'/>Well Secured</p>
                    
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Hero