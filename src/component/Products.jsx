import React from 'react'
import { Prodcuts } from '../data/data'

const Products = () => {
  return (
    <div className=' mt-10 flex justify-center flex-col p-4 md:w-[1200px] mx-auto'>
   <input className="border border-gray-300 px-3 py-2 mb-4 rounded-lg focus:outline-none focus:ring focus:border-blue-300 w-full" placeholder="Enter your input here" />     
{
    Prodcuts.map((item,id)=>(
        <div className="flex flex-col md:flex-row mb-7" key={id}>
  {/* Image div */}
  <div className="order-1  w-full flex justify-center">
    <img src={item.img} className=" md:h-full w-full" />
  </div>

  {/* Text div */}
  <div className="flex flex-col justify-center ml-4 order-1 md:order-2">
    <p className="text-xl font-bold mb-2">{item.title}</p>
    <p className="text-gray-700 mb-2 text-justify">{item.des}</p>
    <p className="text-gray-500 mt-5 mb-3">₹{item.prize}</p>
    <button className="bg-black text-white px-3 py-2 w-full md:w-1/5 mb-3">ADD TO CART</button>
  </div>
</div>


    ))

}
        

        
    </div>
  )
}

export default Products