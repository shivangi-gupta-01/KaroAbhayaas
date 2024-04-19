import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const Cart = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCheckout = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="border border-black mt-10 flex justify-center flex-col p-4 md:w-[900px] mx-auto ">
      <div className='flex justify-between'>
        <p className='text-lg font-bold'>TOTAL:₹1500</p>
        <button className='bg-black text-white px-4 py-2' onClick={handleCheckout}>CHECKOUT</button>
      </div> 
      <hr className="my-8 border-t border-black" /> 
      <div className='flex justify-between'>
        <div>
          <p className='text-xl font-bold'>QUESTION TITLE</p>
          <p><span className='font-bold'>MODULE:</span> NAME OF MODULE</p>
          <p><span className='font-bold'>DATE:</span>10/02/2024</p>
        </div>
        <div className='flex flex-col'>
          <button className='bg-black text-white px-4 py-2 mb-3'>1</button>
          <button className='bg-black text-white px-4 py-2'>DELETE</button>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-8 rounded-lg">
            <p className="text-lg font-semibold mb-4">PLEASE PROVIDE YOUR ADDRSESS</p>
            <Box>
            <TextField id="outlined-basic"  variant="outlined" className='w-full' />
            </Box>
            <div className='flex justify-end gap-8 mt-7'>

            <button className="bg-black text-white px-4 py-2" onClick={handleCloseModal}>CANCLE</button>
            <button className="bg-black text-white px-4 py-2" onClick={handleCloseModal}>SAVE</button>
            </div>
                
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
