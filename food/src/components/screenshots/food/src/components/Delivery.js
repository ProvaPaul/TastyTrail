import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-600 font-bold text-2xl text-center'>Quick Delivery App</h3>
        <div className='w-[1500px] mx-auto grid md:grid-cols-2'>
            <img className='w-[550px] mx-auto my-4' src='https://www.softsuave.com/blog/wp-content/uploads/2020/03/Food-Delivery-app-development-softsuave.png' alt='h' />
            <div className='flex flex-col justify-center py-8'>
                <p className=' font-bold'>Get The App</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-yellow-500'>Savor the Best, Delivered Fresh</h1>
                <p className='from-neutral-950'>At TastyTrail, we believe that every meal is more than just food—it's an adventure waiting to be discovered. Whether you're craving a taste of comfort or eager to explore new, exciting flavors from around the world, we are here to guide your culinary journey. With fresh ingredients, mouthwatering recipes, and a passion for great taste, TastyTrail is your ultimate destination for discovering delightful dishes that turn every bite into a moment of joy. Embark on a flavorful journey with us, and let your taste buds lead the way.</p>
                <button className='bg-orange-700 text-white w-[200px] rounded-md  my-6 mx-auto md:mx-0 py-3 font-bold'>Get Started</button>
            </div>
        </div>

    </div>
  )
}

export default Delivery