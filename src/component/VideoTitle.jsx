import React from 'react'
import { video } from '../data/data'

const VideoTitle = () => {
    return (
        <>
            {
                video.map((item, id) => (
                    <div className='mt-10 flex  flex-col md:flex-row p-4 md:w-[1200px] mx-auto gap-7'>
                        <div className='flex justify-center'>
                            <img src={item.img} className='md:w-full h-full' />
                        </div>
                        <div className='flex flex-col  justify-center'>
                            <p className='text-lg font-bold '>{item.title}</p>
                            <p className='text-justify mb-4'>{item.des}</p>
                            <button className='bg-black text-white px-3 py-3 md:w-1/5'>PRACTICE</button>
                            <hr className='bg-black mt-5 w-full' />
                        </div>
                    </div>
                ))
            }

        </>



    )
}

export default VideoTitle