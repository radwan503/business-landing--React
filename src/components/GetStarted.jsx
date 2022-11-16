import React from 'react';
import { arrowUp } from '../assets';

const GetStarted = () => (
    <section className='flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer'>
      <div className='flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-full'>
        <div className='flex justify-center items-center flex-row'>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
            <span className='text-gradient'>Get</span>
          </p>
          <img src={arrowUp} className='w-[23px] h-[23px] object-contain' alt="arrow"/>
        </div>
         <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient'>Started</span>
         </p>
      </div>
    </section>
  )


export default GetStarted