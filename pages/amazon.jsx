import Image from 'next/image';
import React from 'react';
import amazonImage from '../public/assets/projects/amazon.jpg';

const amazon = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:w-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'>
          <Image
            className='absolute z-1'
            fill='fill'
            stype='cover'
            src={amazonImage}
            alt='/'
          />
          <div>
            <h2 className='py-2'>Property Finder</h2>
            <h3>React JS/</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default amazon;
