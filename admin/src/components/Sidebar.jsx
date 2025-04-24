import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'

const Sidebar = () => {

    const {aToken} = useContext(AdminContext)
    const {dToken} = useContext(DoctorContext)
  
    
  return (
    <div className='min-h-screen bg-white border-right'>
      {
        aToken && <ul className='text-[#515151] mt-5'>
            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} to={'/admin-dashboard'}>
                <img src="https://previews.123rf.com/images/ahasoft2000/ahasoft20001610/ahasoft2000161009378/64732586-house-location-icon-glyph-style-is-flat-iconic-symbol-cyan-color-white-background.jpg" alt="" height={28} width={28} />
                <p>Dashboard</p>
            </NavLink>
            <NavLink  className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}  to={'/all-appointments'}>
                <img src="https://www.shutterstock.com/image-vector/spiral-calendar-vector-icon-style-260nw-344152304.jpg" alt="" height={30} width={30} />
                <p>Appointments</p>
            </NavLink>
            <NavLink  className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}  to={'/add-doctor'}>
                <img src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-male-medical-doctor-icon-png-image_3708206.jpg" alt="" height={30} width={30} />
                <p>Add Doctor</p>
            </NavLink>
            <NavLink  className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}  to={'/doctor-list'}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_QJ0mgorB4nt8YAfBU_fnH5JgwSWWY9RjZQ&s" alt="" height={30} width={30} />
                <p>Doctors List</p>
            </NavLink>
        </ul>
      }
      {
        dToken && <ul className='text-[#515151] mt-5'>
            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`} to={'/doctor-dashboard'}>
                <img src="https://previews.123rf.com/images/ahasoft2000/ahasoft20001610/ahasoft2000161009378/64732586-house-location-icon-glyph-style-is-flat-iconic-symbol-cyan-color-white-background.jpg" alt="" height={28} width={28} />
                <p className='hidden md:block'>Dashboard</p>
            </NavLink>
            <NavLink  className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}  to={'/doctor-appointments'}>
                <img src="https://www.shutterstock.com/image-vector/spiral-calendar-vector-icon-style-260nw-344152304.jpg" alt="" height={30} width={30} />
                <p className='hidden md:block'>Appointments</p>
            </NavLink>
           
            <NavLink  className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}  to={'/doctor-profile'}>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/007/986/570/small/woman-doctor-icon-doctor-woman-with-stereoscopic-glyph-isolated-blue-background-vector.jpg" alt="" height={30} width={30} />
                <p className='hidden md:block'>Profile</p>
            </NavLink>
        </ul>
      }
     
    </div>
  )
}

export default Sidebar

