import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
    const {speciality} = useParams()
    
    const [filterDoc,setFilterDoc] = useState([])
    const [showFilter,setShowFilter] = useState(false)
    const navigate = useNavigate()

    const {doctors} = useContext(AppContext)

    const applyFilter = ()=>{
        if(speciality){
            setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
        }else{
            setFilterDoc(doctors)
        }
    }

useEffect(()=>{
applyFilter()
},[doctors,speciality])



  return (
    <div>
      <p className='text-gray-600 '>Browse through the doctors speciality.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5' >
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={()=>setShowFilter(prev => !prev)}>Filters</button>
      <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex': 'hidden sm:flex'}`}>
  <p
    onClick={() => navigate(`/doctors/${encodeURIComponent('General physician')}`)}
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
      !speciality ? 'bg-cyan-100 text-black' : ''
    }`}
  >
    General physician
  </p>

  <p
    onClick={() => navigate(`/doctors/${encodeURIComponent('Gynecologist')}`)}
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
      speciality === 'Gynecologist' ? 'bg-cyan-100 text-black' : ''
    }`}
  >
    Gynecologist
  </p>

  <p
    onClick={() => navigate(`/doctors/${encodeURIComponent('Dermatologist')}`)}
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
      speciality === 'Dermatologist' ? 'bg-cyan-100 text-black' : ''
    }`}
  >
    Dermatologist
  </p>

  <p
    onClick={() => navigate(`/doctors/${encodeURIComponent('Pediatricians')}`)}
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
      speciality === 'Pediatricians' ? 'bg-cyan-100 text-black' : ''
    }`}
  >
    Pediatricians
  </p>

  <p
    onClick={() => navigate(`/doctors/${encodeURIComponent('Neurologist')}`)}
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
      speciality === 'Neurologist' ? 'bg-cyan-100 text-black' : ''
    }`}
  >
    Neurologist
  </p>

  <p
    onClick={() => navigate(`/doctors/${encodeURIComponent('Gastroenterologist')}`)}
    className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
      speciality === 'Gastroenterologist' ? 'bg-cyan-100 text-black' : ''
    }`}
  >
    Gastroenterologist
  </p>
</div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
            {
             filterDoc.map((item,index)=> (
                <div onClick={()=>navigate(`/appointment/${item._id}`)} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 flex flex-col items-center text-center"
        >
                  <img className='bg-cyan-200' src={item.image} alt=''/>
                  <div className='p-4  '>
                  <div className={`flex gap-1 text-sm  ${item.available ? 'text-green-500 ' : 'text-red-500'}`}>
              <p className={`w-2 h-2 mt-2 ${item.available ? 'bg-green-500 ' : 'bg-red-500'} rounded-full`}></p><p>{item.available ? 'Available': ' Not Available'}</p>
              </div>
                      <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                      <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                  </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Doctors
