import React from 'react'

const NewsLetter = () => {
  return (
    <div className='max-w-[1700px] m-auto text-white px-4 bg-gray-800 mt-8 p-2'>
        <div className='mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1>Need advice to know about the system?</h1>
                <p>Sign Up to stay up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input type='email' placeholder='email' className='p-3 flex w-full rounded-md text-black'/>
            <button className='bg-green-400 text-white rounded-md font-medium w-[200px] ml-4 my-4 px-6 border-none'>Notify me</button>
                </div>
        <p>we are concerned about the security of your data, Read 
             <span className='text-green-400 font-bold'> Privacy Policy</span>
        </p>
        </div>
        <hr className='my-8 bg-gray-400 border-l'></hr>

        </div>

    </div>
  )
}

export default NewsLetter