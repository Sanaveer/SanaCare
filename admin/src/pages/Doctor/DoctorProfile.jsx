import React, { useContext, useEffect, useState } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import axios from 'axios'
import {toast} from 'react-toastify'
const DoctorProfile = () => {
  const { dToken, profileData, setProfileData, getProfileData, changeAvailability,backendUrl } = useContext(DoctorContext)
  const { currency } = useContext(AppContext)

  const [isEdit, setIsEdit] = useState(false)

  const [isAvailable, setIsAvailable] = useState(false)
  const updateProfile = async () => {
    try {
      
      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        available: profileData.available

      }

      const { data} = await axios.post(backendUrl + '/api/doctor/update-profile', updateData,{headers:{dToken}})
    if (data.success) {
      toast.success(data.message)
      setIsEdit(false)
      getProfileData()
      
    }else{
      toast.error(data.message)

    }
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }

  useEffect(() => {
    if (dToken) {
      getProfileData()
    }
  }, [dToken])

  useEffect(() => {
    if (profileData) {
      setIsAvailable(profileData.available)
    }
  }, [profileData])

  const toggleAvailability = async () => {
    await changeAvailability()
    getProfileData()
  }

  return profileData && (
    <div className="max-w-5xl mx-auto px-4 py-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-2">
        
        {/* Profile Image */}
        <div className="flex flex-col items-center sm:items-start">
          <img
            className="w-48 h-48 rounded-xl object-cover border-4 bg-primary"
            src={profileData.image}
            alt={`${profileData.name}'s profile`}
          />
          <div className="mt-4 flex items-center gap-2">
            <input
              id="availability"
              type="checkbox"
              checked={profileData.available}
              onChange={()=> isEdit && setProfileData(prev =>({...prev, available:  !prev.available}))}
              className="w-4 h-4 accent-primary"
            />
            <label htmlFor="availability" className="text-sm text-gray-700">Available</label>
          </div>
        </div>

        {/* Profile Details */}
        <div className="sm:col-span-2 space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-black">{profileData.name}</h2>
            <p className="text-sm text-gray-500">{profileData.degree} • {profileData.speciality}</p>
            <p className="text-sm text-gray-400 mt-1">Experience: {profileData.experience} </p>
          </div>

          <div>
            <h3 className="text-md font-semibold text-gray-800 mb-1">About</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {profileData.about}
            </p>
          </div>

          <div>
            <h3 className="text-md font-semibold text-gray-800 mb-1">Appointment Fee</h3>
            <p className="text-primary font-semibold text-lg">{currency}{isEdit ? <input type="number" onChange={(e)=>setProfileData(prev =>({...prev, fees: e.target.value}))} value={profileData.fees}/> : profileData.fees}</p>
          </div>

          <div>
            <h3 className="text-md font-semibold text-gray-800 mb-1">Address</h3>
            <p className="text-sm text-gray-600 leading-snug">
              {isEdit ? <input type='text' onChange={(e)=>setProfileData(prev => ({...prev, address:{...prev.address,line1:e.target.value}}))} value={profileData.address.line1}/> :profileData.address.line1}<br />
              {isEdit ? <input type='text' onChange={(e)=>setProfileData(prev => ({...prev, address:{...prev.address,line2:e.target.value}}))} value={profileData.address.line2}/> :profileData.address.line2}
            </p>
          </div>

          <div>
            {
              isEdit 
              ?<button onClick={updateProfile} className="mt-4 px-5 py-2 border border-primary text-sm rounded-full shadow hover:bg-primary/90 transition duration-200">
              Save
            </button>
            : <button onClick={()=>setIsEdit(true)} className="mt-4 px-5 py-2 border border-primary text-sm rounded-full shadow hover:bg-primary/90 transition duration-200">
          Edit Profile
          </button>
            }
           
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorProfile
