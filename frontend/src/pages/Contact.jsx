import React from 'react'

const Contact = () => {

  return (
    <div>
      <div className="text-center text-2xl pt-5 text-gray-500 mb-5 " >

        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-12 text-sm'>
        <img  src="https://media.istockphoto.com/id/2166025385/photo/team-of-asian-doctors-are-discussing-and-using-laptop-computer-thumb-up-with-senior-female.jpg?s=612x612&w=0&k=20&c=RReEOB475qWH76Uu4Zu-8pLdyRbhDRxvyU2cJO9Fd1g=" alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-lg text-gray-600'>Our OFFICE</p>
            <p className=' text-gray-500'>546788 Cricle station<br/> Suite 450, Church Road, Bangalore
            </p>
            <p className='text-gray-500'>Tel: +91-876-786-9087<br/>Email: info@apollohospitals.com</p>
            <p className='font-semibold text-lg text-gray-600'>Careers at Apollo</p>
            <p className='text-gray-500'>Learn more information about the authenticity or otherwise of such communications and Job openings.</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Job</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
