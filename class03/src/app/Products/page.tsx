import React from 'react';

const Page = () => {
    return (
        <div>
            <h2 className='text-center bg-amber-700 h-14 pt-2 shadow-xl shadow-amber-800 text-3xl font-serif font-bold'>Our products  </h2>
            <div className='flex bg-amber-950 w-screen  flex-wrap'>
            <div className='h-96 6 m-8    rounded-xl items-center text-center bg-amber-800    '>
                <img className='rounded-t-xl h-32 w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwioRHG5mzvx0hsIwpTowFIBH1CN7wW--tw&s" alt="" />
                <div className='text-2xl text-white font-mono mt-4'>French Vanilla </div>
                <p>French vanilla is a classic coffee flavor that offers a subtle and pleasing taste. Its aromatic touch enhances decaf blends and standard beverages packed with morning fuel. 
                </p>
                
            </div>

            <div className='h-96 w  m-8   rounded-xl items-center text-center bg-amber-800  '>
                <img className='rounded-t-xl h-32 w-full' src="https://as2.ftcdn.net/v2/jpg/01/05/90/77/1000_F_105907729_4RzHYsHJ2UFt5koUI19fc6VzyFPEjeXe.jpg" alt="" />
                <div className='rounded-3xl'>Hello products</div>
                <div>hi </div>
            </div>

            <div className='h-96 w  m-8   rounded-xl items-center text-center bg-amber-800  '>
                <img className='rounded-t-xl h-32 w-full' src="https://t3.ftcdn.net/jpg/01/59/18/36/240_F_159183621_0YTKAAqAA7GI7DlCBfYJ2wfKbC6Zf30V.jpg" alt="" />
                <div className='rounded-3xl'>Hello products</div>
                <div>hi </div>
            </div>

            <div className='h-96 w  m-8   rounded-xl items-center text-center bg-amber-800 '>
                <img className='rounded-t-xl h-32 w-full' src="https://t4.ftcdn.net/jpg/01/94/82/87/240_F_194828703_vuNjz8Otb66VfI4rQyg9tBUPuGAugsUR.jpg" alt="" />
                <div className='rounded-3xl'>Hello products</div>
                <div>hi </div>
            </div>
            
         </div> 
     </div>
    );
}

export default Page;
