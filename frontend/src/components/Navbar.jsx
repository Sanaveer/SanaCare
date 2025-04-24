import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext)

  const [showMenu, setShowMenu] = useState(false)
  const [image] = useState(false)

  const logout = async () => {
    setToken(false)
    localStorage.removeItem('token')
    navigate('/') // 👈 Redirect to homepage
  }

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 mt-0 border-b border-b-gray-800'>
      <img
        onClick={() => navigate('/')}
        className='w-22 cursor-pointer'
        src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/afc603swozyofbjwrojh"
        alt="logo"
        height={180}
        width={180}
      />

      {/* Desktop Navigation */}
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'><li className='py-1'>HOME</li></NavLink>
        <NavLink to='/doctors'><li className='py-1'>ALL DOCTORS</li></NavLink>
        <NavLink to='/about'><li className='py-1'>ABOUT</li></NavLink>
        <NavLink to='/contact'><li className='py-1'>CONTACT</li></NavLink>
      </ul>

      <div className='flex items-center gap-4'>
        {
          token && userData ? (
            <div className='flex items-center gap-1 cursor-pointer group relative'>
              <img
                className='w-8 h-8 object-cover rounded-full border border-primary'
                src={image ? URL.createObjectURL(image) : userData.image}
                alt="user"
              />

              <img
                className='w-4'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXIm5JRu_Vp70ZzIz_lmP98gjJQgSX_zJeaA&s'
                alt='dropdown'
                height={30}
                width={30}
              />

              {/* Dropdown menu */}
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={() => navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                  <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className='bg-primary text-black px-8 py-3 rounded-full font-weight hidden md:block'
            >
              Create account
            </button>
          )
        }

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMenu(true)}
          className='md:hidden cursor-pointer'
          src='https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-menu-vector-icon-png-image_711831.jpg'
          alt='menu'
          height={35}
          width={35}
        />

        {/* Mobile Slide-out Menu */}
        <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Apollo_Hospitals_Logo.svg/1200px-Apollo_Hospitals_Logo.svg.png" alt="logo" height={50} width={60} />
            <img onClick={() => setShowMenu(false)} src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/navigate_cross.png" alt="close" height={20} width={20} />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
