import React from 'react'
import Navbar from '../components/Navbar'
import ItemsDisplay from '../components/ItemsDisplay'
import Chains from '../components/Chains'
import FirmCollections from '../components/FirmCollections'

const UserLanadingPage = () => {
  return (
    <div>
      <Navbar/>
      <div className="landing-section">
      <ItemsDisplay/>
      <Chains/>
      <FirmCollections />
      </div>
    </div>
  )
}

export default UserLanadingPage