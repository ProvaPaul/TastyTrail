import React, { useState } from 'react'
import {mealData} from './data/data'
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline';
const Meal = () => {
    const [foods,setFoods]=useState(mealData);
    const filterCategory=(category)=>{
        setFoods(
            mealData.filter((item)=>{
                return item.category=== category;
            })
        )
    }
  return (
    <div className='max-w-[1600px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-2xl text-center py-6'>Our Meal</h1>
        {/*  now we have to sort the buttons" */}
        <div className='flex flex-col lg:flex-row justify-center'>
            <div className='flex justify-center md:justify-center pb-4 -pt-2'>
            <button onClick={()=>setFoods(mealData)} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700 rounded-xl'>All</button>

            <button onClick={()=>filterCategory("pizza")} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700 rounded-xl'>Pizza</button>

            <button onClick={()=>filterCategory("chicken")} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 rounded-xl hover:border-orange-700'>Chicken</button>

            <button onClick={()=>filterCategory("salad")} className='m-1 border-orange-700 text-white bg-orange-700 rounded-xl hover:bg-white hover:text-orange-700 hover:border-orange-700'>Salad</button> 

            <button onClick={()=>filterCategory("juice")} className='m-1 border-orange-700 text-white bg-orange-700 rounded-xl hover:bg-white hover:text-orange-700 hover:border-orange-700'>Juice</button>
            </div>

           
        </div>
        {/* meal part */}
        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6'>
            {
                foods.map((item)=>(
                    <div key={item.id} className='border-none hover:scale-105 duration-300'>
                        <img src={item.image} alt='{item.name' className='w-full h-[200px] object-cover rounded-lg '/>
                <div className='flex justify-between py-2 px-4'>
                    <p className='font-bold'>{item.name}</p>
                    <p className='bg-orange-600 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 font-bold'>{item.price}</p>
                    {/* mt-10 will put the price to the picture inside*/}
                    </div>
                    <div className='pl-3 py-4 -mt-7'>
                    <p className='flex items-center text-blue-900'>View More<ArrowSmallRightIcon className='w-5 ml-2'/></p>
                    </div>
                    </div>
                    
                ))
            }
        </div>

    </div>
  )
}

export default Meal