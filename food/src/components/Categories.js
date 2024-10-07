import React from 'react'
import { categories } from './data/data'
const Categories = () => {
  return (
    <div className='max-w-[1650px] m-auto px-3 py-3'>
        <h1 className='text-orange-600 font-bold text-2xl text-center py-6'>Trending Categories</h1>
        <div className='grid grid-cols-2 md:grid-cols-6 gap-3 py-5 px-2'>
        {
            categories.map((item)=>{
              return  <div key={item.id} className='p-4 justify-center items-center hover:scale-105 duration-300'>
                    <img className='object-cover rounded-xl w-60 h-20 cursor-pointer shadow-xl' src={item.image} alt='hi'></img>
                </div>
            })
        }
        </div>
    </div>
  )
}

export default Categories