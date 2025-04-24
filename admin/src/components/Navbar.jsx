import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { useNavigate} from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'

const Navbar = () => {

  const {aToken, setAToken} = useContext(AdminContext)
  const {dToken,setDToken} = useContext(DoctorContext)
  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
      aToken && setAToken('')
      aToken && localStorage.removeItem('aToken')
      dToken && setDToken('')
      dToken && localStorage.removeItem('dToken')
  }
  return (
    <div  className='flex justify-between item-center px-4 sm:px-10 py-3 border-b  bg-white'>
      <div className='flex items-center gap-2 text-xs '>
        <img className= ' cursor-pointer' src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/afc603swozyofbjwrojh" alt="" height={180} width={180} />
     <p className='border px-2.5 py-0.5 rounded-full border-cyan-500 text-gray-800'>{aToken ? 'Admin' : 'Doctor'}</p>
      </div>
      <button onClick={logout} className='bg-primary text-black border px-10 h-10 rounded-full border-gray-500 '>Logout</button>
    </div>
  )
}

export default Navbar