import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDotors = ({speciality,docId}) => {
    const {doctors} = useContext(AppContext)
    const navigate = useNavigate()
    const [relDoc,setRelDocs] = useState([])


    useEffect(()=>{
        if(doctors.length > 0 && speciality){
          const doctorsData = doctors.filter((doc)=> doc.speciality === speciality && doc._id !== docId)
          setRelDocs(doctorsData)
        }

    },[doctors,speciality,docId])
  return (
    <div className='flex flex-col items-center gap-6 py-5 text-gray-800'>
    <h1 className='text-3xl font-medium'>Related Doctors</h1>
    <p className="text-center text-sm sm:w-1/2">Simply browse through our extensive list of trusted doctors</p>
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4  max-w-5xl">
      {relDoc.slice(0,5).map((item,index)=> (
      <div onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 flex flex-col items-center text-center"
>
        <img className='bg-cyan-100' src={item.image} alt=''/>
        <div className='p-4  '>
        <div className={`flex gap-1 text-sm  ${item.available ? 'text-green-500 ' : 'text-red-500'}`}>
              <p className={`w-2 h-2 mt-2 ${item.available ? 'bg-green-500 ' : 'bg-red-500'} rounded-full`}></p><p>{item.available ? 'Available': ' Not Available'}</p>
              </div>
            <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
            <p className='text-gray-600 text-sm'>{item.speciality}</p>
          </div>
        </div>
      ))}
    </div>
    <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>more</button>
  </div>
  )
}

export default RelatedDotors
