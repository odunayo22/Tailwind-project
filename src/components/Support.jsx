import React from 'react'
import { BsFillTelephoneFill,BsArrowRightShort } from 'react-icons/bs';
import { FaLongArrowAltRight } from 'react-icons/fa'
import { HiSupport,HiChip } from 'react-icons/hi';

import Taiwo from '../assets/odun-edit.png';

const Support = () => {
  return (
    <div name="support" className='w-full mt-24'>
        <div className="w-full h-[700px] bg-gray-900/90 absolute">
            <img src={Taiwo} alt="" className="w-full h-full object-cover mix-blend-overlay" />
        </div>
        <div className="max-w-[1240px] mx-auto text-white relative">
            <div className="px-4 py-12">
                <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">Support</h2>
                <h3 className="text-5xl font-bold py-6 text-center">Finding the right team</h3>
                <p className="py-4 text-3xl text-slate-300">Our Support team are always available and we will never disappoint you</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <BsFillTelephoneFill className='w-16 h-12 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                        <h3 className='font-bold text-2xl my-6'>Sales</h3>
                        <p className='text-gray-600 text-xl'>You can contact us to know details of each price tags</p>
                    </div>
                    <div className="bg-slate-100 pl-8 py-4">
                        <p className="flex items-center text-indigo-600">Contact Us<FaLongArrowAltRight className='w-5 ml-2'/></p>
                    </div>
                </div>

                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <HiSupport className='w-16 h-12 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                        <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                        <p className='text-gray-600 text-xl'>You can contact us to know details of each price tags</p>
                    </div>
                    <div className="bg-slate-100 pl-8 py-4">
                        <p className="flex items-center text-indigo-600">Contact Us<FaLongArrowAltRight className='w-5 ml-2'/></p>
                    </div>
                </div>

                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <HiChip className='w-16 h-12 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                        <h3 className='font-bold text-2xl my-6'>Enqiries</h3>
                        <p className='text-gray-600 text-xl'>You can contact us to know details of each price tags</p>
                    </div>
                    <div className="bg-slate-100 pl-8 py-4">
                        <p className="flex items-center text-indigo-600">Contact Us<FaLongArrowAltRight className='w-5 ml-2'/></p>
                    </div>
                </div>
            </div>


            
        </div>

    </div>
  )
}

export default Support