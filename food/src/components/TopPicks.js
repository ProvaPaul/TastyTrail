import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { topPicks } from './data/data';
import '@splidejs/react-splide/css'; // Import Splide's default CSS

const TopPicks = () => {
  return (
    <div>
        <h1 className='text-orange-600 font-bold text-2xl text-center py-2'>Top Picks</h1>
        <div className='hidden lg:flex max-w[1500px] m-auto px-2 py-6 '>
            <Splide options={{ perPage:4, gap:'1rem',grag:'free',arrows:'false' }}>
                {/* arrows false means last e arrow ta chole jabe */}
            {/* <Splide options={{ perPage: 4, rewind: true, gap: '1rem', autoplay: true, pauseOnHover: true }}> */}

            {
                topPicks.map((item)=>{
                    return (
                        <SplideSlide key={item.id}>
                          <div className='rounded-3xl relative'>
                            <div className='absolute w-full h-full  rounded-3xl text-white'>
                            <p className='px-2 font-bold text-2xl pt-4'>{item.title}</p>
                            <p className='px-2'>{item.price}</p>
                            <button className='border-dotted border-white text-white mx-2 absolute bottom-4'>Add To Cart</button>
                            </div>
                        <img src={item.img} alt='hi' className='h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-500'/>
                        </div>  
                        </SplideSlide>
                        
                    )
                })
            }

             </Splide>
   
        </div>
    </div>
    
  )
}
// for creating a slider we have to include slider package
export default TopPicks