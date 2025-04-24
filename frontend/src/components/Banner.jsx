import React from 'react'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()
  return (
    <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-16 lg:px-14 my-20 md:mx-12'>
      {}
      <div className='flex-1 py-8 sm:py-12 md:py-16 lg:py-24 lg:pl-5'>
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-black">


    <p>Book Appointment</p>
    <p className='mt-4'>With 100+ Trusted Doctors</p>
</div>
<button onClick={()=>{navigate('/login');scrollTo(0,0)}} className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'>Create account</button>
      </div>
      {}
      <div className='hidden md:block md:w-12 lg:w-[340px] relative'>
        <img className='w-full absolute bottom-0 right-0 max-w-md' src='https://5.imimg.com/data5/SELLER/Default/2021/6/UA/AU/LK/108635184/home-doctor-appointment-service.png' alt=''/>
      </div>
    </div>
  )
}

export default Banner
