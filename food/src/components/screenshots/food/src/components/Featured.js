import React, { useState } from 'react'
import { BsChevronCompactLeft,BsChevronCompactRight } from 'react-icons/bs'
// for moving slide
import {RxDotFilled} from  'react-icons/rx'

const Featured=()=> {
    const sliders = [
        {
            url:'https://png.pngtree.com/background/20230613/original/pngtree-large-plate-with-fast-food-picture-image_3418111.jpg'
         
        },
        {
          url: 'https://tse4.mm.bing.net/th?id=OIP.m50vnaTLkgiUh_mC23yN4QHaE8&pid=Api&P=0&h=220',
        },
        {
          url: 'https://tse1.mm.bing.net/th?id=OIP.ftu0As12xDWj3mBXDZZUnwHaEK&pid=Api&P=0&h=220',
        },
        {
             url: 'https://thumbs.dreamstime.com/b/chicken-burger-french-fries-157318661.jpg',
        }
      ];
      const [currentIndex, setCurrentIndex] = useState(0);

      const prevSlider=()=>{
        const isFirstSlide=currentIndex===0
        const newIndex=isFirstSlide? sliders.length-1 : currentIndex-1
        setCurrentIndex(newIndex)
      }
      const nextSlider=()=>{
        const isLastSlide=currentIndex===sliders.length-1
        const newIndex=isLastSlide? 0 : currentIndex+1
        setCurrentIndex(newIndex)
      }

      const moveToSlide =(slideIndex)=>{
        setCurrentIndex(slideIndex)
      }
      return (
        <div className="max-w-[1720px] h-[500px] w-full py-4 px-4 relative group">
          <div
            className="w-full h-full rounded-2xl bg-center bg-contain bg-gray-300 bg-no-repeat duration-500"
            style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
          ></div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlider}/>
          </div>
          <div className="hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlider}/>
          </div>
        {/* for showing the ... below the main picture */}
          <div className='flex top-4 justify-center py-2'>
            {
                sliders.map((sliderItems,slideIndex)=>(
                    <div key={slideIndex} 
                    onClick={()=>moveToSlide(slideIndex)}
                    className='text-2xl cursor-pointer'>
                        <RxDotFilled/>
                    </div>
                )
                )
            }
          </div>
        </div>
      );
    }
export default Featured