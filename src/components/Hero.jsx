import React from 'react'

const Hero = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4'>
            <div className='max-h-[500px] relative'>
                <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center rounded-xl'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-600'>Best</span></h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-600'>Foods</span> Delivered</h1>
                </div>
                <img className="w-full max-h-[500px] object-cover rounded-xl" src="https://images.pexels.com/photos/20422123/pexels-photo-20422123/free-photo-of-food-on-plate-and-soup-in-cup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Dosa" />
            </div>
        </div>
    )
}

export default Hero