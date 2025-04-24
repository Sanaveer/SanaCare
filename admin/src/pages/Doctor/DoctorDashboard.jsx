import React from 'react'
import { useContext } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { useEffect } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

const DoctorDashboard = () => {
  const { dToken, dashData, setDashData, getDashData,completeAppointment, cancelAppointment } = useContext(DoctorContext)
  const {currency, slotDateFormat} = useContext(AppContext)

  useEffect(() => {
    if (dToken) {
      getDashData()
    }

  }, [dToken])

  return dashData && (
    <div className='m-5'>
      <div className='flex flex-wrap gap-3'>
        <div className='flex item-center gap-2 bg-white p-8 min-w-52 rounded border-2 border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <img className='w-16' src="https://cdn-icons-png.flaticon.com/512/354/354413.png" alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{currency}{dashData.earnings}</p>
            <p className='text-gray-400'>Earnings</p>
          </div>
        </div>
        <div className='flex item-center gap-2 bg-white p-8 min-w-52 rounded border-2 border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <img className='w-16' src="https://st2.depositphotos.com/5266903/9161/v/950/depositphotos_91610678-stock-illustration-date-and-time-icon.jpg" alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashData.appointments}</p>
            <p className='text-gray-400'>Appointments</p>
          </div>
        </div>
        <div className='flex item-center gap-2 bg-white p-8 min-w-52 rounded border-2 border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <img className='w-16' src="https://st2.depositphotos.com/5266903/9115/v/950/depositphotos_91152924-stock-illustration-patient-assistance-icon.jpg" alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashData.patients}</p>
            <p className='text-gray-400'>Patients</p>
          </div>
        </div>

      </div>
      <div className='bg-white'>
        <div className='flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border'>
          <img src="https://media.istockphoto.com/id/1297953208/vector/white-line-hotel-booking-calendar-icon-isolated-with-long-shadow-green-square-button-vector.jpg?s=612x612&w=is&k=20&c=HUh0ZdvX1gGkAjQZ8oyZ1UTFX97bJCtw8FgGs0DxwPA=" alt="" height={40} width={40}/>
       <p className='font-semibold'>Latest Bookings</p>
        </div>
        <div className='pt-4  border border-t-0'>
          {
            dashData.latestAppointments.map((item,index)=>(
              <div className='flex items-center px-6 py-3 gap-3 hover:bg-gray-100' key={index}>
                <img className='rounded-full w-10' src={item.userData.image} alt="" />
                <div className='flex-1 text-sm'>
                  <p className='text-gray-800 font-medium'>{item.userData.name}</p>
                  <p className='text-gray-600'>{slotDateFormat(item.slotDate)}</p>
                </div>
                {
                item.cancelled
                  ? <p className='text-red-400 text-xs font-medium'>Cancelled</p>
                  : item.isCompleted
                    ? <p className='text-green-500 text-xs font-medium' >Completed</p>
                    : <div className='flex'>
                      <img  onClick={() => cancelAppointment(item._id)} className='w-8 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeZkByh0gSk-UaY8favhKrlAV7qCQSl06neQ&s" alt="" height={20} width={20} />
                      <img onClick={() => completeAppointment(item._id)} className='w-8  cursor-pointer' src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_1280.png" alt="" height={20} width={20} />
                    </div>
              }

              </div>
            ))
          }

        </div>
      </div>

    </div>
  )
}

export default DoctorDashboard
