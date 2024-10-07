import React from 'react'
import {mealData} from './data/data'
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline';
const Meal = () => {
  return (
    <div className='max-w-[1600px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-2xl text-center py-9'>Our Meal</h1>

        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6'>
            {
                mealData.map((item)=>(
                    <div className='border-none hover:scale-105 duration-300'>
                        <img src={item.image} alt='{item.name' className='w-full h-[200px] object-cover rounded-lg '/>
                <div className='flex justify-between py-2 px-4'>
                    <p className='font-bold'>{item.name}</p>
                    <p className='bg-orange-600 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 font-bold'>{item.price}</p>
                    {/* mt-10 deyar karone pic er moddhe price geche */}
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