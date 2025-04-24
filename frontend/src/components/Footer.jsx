import React from 'react'

const Footer = () => {
  return (
    <div className='md:mx-8'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-8 mt-40 text-sm'>
        {}
        <div>
            <img className=''src='https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/afc603swozyofbjwrojh' alt='' height={180} width={180}/>
      <p className='w-full md:w-2/3 text-gray-600 leading-6'>SANACARE, founded by Dr. Prathap C. Reddy in 1983, is the first corporate hospital in India and a pioneer in private healthcare, now operating a large network of hospitals, pharmacies, and diagnostic centers across India and Asia. </p>
        </div>
        {}
        <div>
          <p className='text-xl font-medium mb-5 mt-8'>COMPANY</p>
          <ul className='flex flex-col gap-4 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {}
        <div>
            <p className='text-xl font-medium mb-5 mt-8'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-4 text-gray-600'>
                <li>1860-500-1066</li>
                <li>www.sanacare.com</li>
                <li>helpdesk@sanacare247.com</li>
            </ul>

        
        </div>
      </div>
      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright 2025@ SanaCare - All Right Reserved</p>

      </div>
    </div>
  )
}

export default Footer
