import React from 'react'
import AccountMenu from '../Utils/AccountMenu'
const Navbar = () => {
  return (
    <header className='flex justify-start shadow-custom h-20 marg_l' >
        
        <div className="second_half">
          <AccountMenu />
        </div>
        <div></div>
    </header>
  )
}

export default Navbar