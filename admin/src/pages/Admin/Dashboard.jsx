import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { useEffect } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

const Dashboard = () => {

  const { aToken, getDashData, cancelAppointment, dashData } = useContext(AdminContext)

  const { slotDateFormat } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getDashData()

    }
  }, [aToken])

  return dashData && (
    <div className='m-5'>
      <div className='flex flex-wrap gap-3'>
        <div className='flex item-center gap-2 bg-white p-8 min-w-52 rounded border-2 border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <img className='w-16' src="https://static.vecteezy.com/system/resources/thumbnails/007/986/570/small/woman-doctor-icon-doctor-woman-with-stereoscopic-glyph-isolated-blue-background-vector.jpg" alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashData.doctors}</p>
            <p className='text-gray-400'>Doctors</p>
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
            <p className='text-xl font-semibold text-gray-600'>{dashData.patient}</p>
            <p className='text-gray-400'>Patients</p>
          </div>
        </div>

      </div>
      <div className='bg-white'>
        <div className='flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border'>
          <img src="https://media.istockphoto.com/id/1297953208/vector/white-line-hotel-booking-calendar-icon-isolated-with-long-shadow-green-square-button-vector.jpg?s=612x612&w=is&k=20&c=HUh0ZdvX1gGkAjQZ8oyZ1UTFX97bJCtw8FgGs0DxwPA=" alt="" height={60} width={60} />
          <p className='font-semibold'>Latest Bookings</p>
        </div>
        <div className='pt-4  border border-t-0'>
          {
            dashData.latestAppointments.map((item, index) => (
              <div className='flex items-center px-6 py-3 gap-3 hover:bg-gray-100' key={index}>
                <img className='rounded-full w-10' src={item.docData.image} alt="" />
                <div className='flex-1 text-sm'>
                  <p className='text-gray-800 font-medium'>{item.docData.name}</p>
                  <p className='text-gray-600'>{slotDateFormat(item.slotDate)}</p>
                </div>
                {
                  item.cancelled
                    ? <p className='text-red-400 text-xs font-medium'>Cancelled</p>
                    : item.isCompleted
                      ? <p className='text-green-500 text-xs font-medium'>Completed</p>
                      : <img onClick={() => cancelAppointment(item._id)} className='w-8 cursor-pointer' src="https://t4.ftcdn.net/jpg/05/53/38/83/360_F_553388305_mPAcXtLKk1M5l1ByyzbNUE7TrD1UFvom.jpg" alt="" />

                }
              </div>
            ))
          }

        </div>
      </div>

    </div>
  )
}

export default Dashboard
