import React from 'react';
import { About } from '../data/data';

const AboutUs = () => {
  return (
    <div className='mt-10 p-4 md:w-[900px] mx-auto'>
      {About.map((item, id) => (
        <div className="flex flex-col md:flex-row mb-8" key={id}>
          {id % 2 === 0 ? (
            <>
              <img src={item.img} alt={`Thumbnail ${id}`} className="rounded-md shadow-md md:w-1/2 md:mr-4 " />
              <p className='text-justify md:w-1/2 md:ml-4'>{item.des}</p>
            </>
          ) : (
            <>
              <p className='text-justify md:w-1/2 md:ml-4'>{item.des}</p>
              <img src={item.img} alt={`Thumbnail ${id}`} className="rounded-md shadow-md md:w-1/2 md:mr-4 ml-3" />
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default AboutUs;
