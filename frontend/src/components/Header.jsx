import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-8 lg:px-20'>
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
      <p className="text-3xl md:text-4xl lg:text-4xl text-black font-semibold leading-tight">
      Book Appointment <br /> With Trusted Doctors
</p>

        <div className='flex flex-col md:flex-row items-center gap-3 text-black text-5m font-light'>
        <img className='w-28' src='https://www.profilepicture.ai/_nuxt/img/profile-picture-border-type.413d1d1.jpg'alt='' height={100} width={100}/>
        <p>
        Simply browser through  of trusted doctors,<br className='hidden sm:block'/> schedule your appointment hassle-free. 
        </p>
        </div>
        <a href='#speciality' className='flex item-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 '>
            Book appointment <img className='w-3' src='https://www.shutterstock.com/image-vector/arrow-icon-vector-symbol-sign-260nw-1886517145.jpg' alt='' height={30} width={30} />
        </a>
      </div>
      <div className='md:w-1/2 relative'>
       <img  className='w-full md:absolute bottom-12 h-auto rounded-lg' src='https://st3.depositphotos.com/3441621/16259/i/450/depositphotos_162593362-stock-photo-portrait-of-group-of-smiling.jpg' alt='' />
      </div>
    </div>
  )
}

export default Header
