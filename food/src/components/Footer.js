import React from 'react'
import {FaDribbbleSquare,FaFacebookSquare,FaGithubSquare,FaInstagram,FaTwitterSquare } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='max-w-[1700px] m-auto px-4 bg-gray-800'>
        <div className='py-16 px-4 grid lg:grid-cols-3 gap-6  text-white'>
            <div>
                <h1 className='w-full text-3xl font-bold text-orange-500'>TastyTrail</h1>
                <p>
                At TastyTrail, we believe that every meal is more than just food—it's an adventure waiting to be discovered. Whether you're craving a taste of comfort or eager to explore new, exciting flavors from around the world, we are here to guide your culinary journey.
                </p>
                <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaDribbbleSquare size={30}/>
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
              <div>
                <h6 className='font-bold text-green-400 text-lg'>Location</h6>
                <ul>
                <li className='py-2 text-sm'>New York</li>
                <li className='py-2 text-sm'>India</li>
                <li className='py-2 text-sm'>Bangladesh</li>
                <li className='py-2 text-sm'>Canada</li>
                </ul>
              </div>
              <div>
                <h6 className='font-medium text-green-400 text-lg'>Stores</h6>
                <ul>
                <li className='py-2 text-sm'>African Hut</li>
                <li className='py-2 text-sm'>British Food Shop</li>
                <li className='py-2 text-sm'>Import Shop</li>
                <li className='py-2 text-sm'>Origin World Shop</li>
                </ul>
              </div>
              <div>
                <h6 className='font-medium text-green-400 text-lg'>Links</h6>
                <ul>
                <li className='py-2 text-sm'>Contact Us</li>
                <li className='py-2 text-sm'>About Us</li>
                <li className='py-2 text-sm'>Shipping</li>
                <li className='py-2 text-sm'>Privacy</li>
                </ul>
              </div>

              <div>
                <h6 className='font-medium text-green-400 text-lg'>Follow Us</h6>
                <ul>
                <li className='py-2 text-sm'><FaFacebookSquare size={25}/></li>
                <li className='py-2 text-sm'><FaInstagram size={25}/></li>
                <li className='py-2 text-sm'><FaTwitterSquare size={25}/></li>
                <li className='py-2 text-sm'><FaGithubSquare size={25}/></li>
                </ul>
              </div>

            </div>
        </div>

    </div>
  )
}

export default Footer