import React, { useEffect, useState } from 'react'
import API_URL from './helpers/apiPath'
import axios from 'axios'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { ThreeDots } from 'react-loader-spinner'
  ;

const Chains = () => {
  const [vendorData, setVenodrData] = useState([])
  const [loading, setLoading] = useState(true)


  const vendorFirmHandler = async () => {
    try {
      const response = await axios.get(`${API_URL}/vendor/all-vendors`)
      setVenodrData(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      alert("Failed to fetch data")
      setLoading(true)
    }
  }

  useEffect(() => {
    vendorFirmHandler()
  }, [])

  const handleScroll = (direction) => {
    const chainSectionEl = document.getElementById('chainSection')
    const scrollAmount = 280;
    if (direction === 'left') {
      chainSectionEl.scrollTo({
        left: chainSectionEl.scrollLeft - scrollAmount,
        behavior: "smooth"
      })
    }
    else if (direction === 'right') {
      chainSectionEl.scrollTo({
        left: chainSectionEl.scrollLeft + scrollAmount,
        behavior: "smooth"
      })
    }
  }


  return (
    <>

      {loading && <div className='loader-section'>
        <p>Loading🍜🍜</p>
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        /></div>}
      <div className="button-section">
        <h3>Top Restaurant chains in Hyderabad</h3>
        <div className='arrow-buttons'>
          <button onClick={() => handleScroll('left')}><FaRegArrowAltCircleLeft className='button-icons' /></button>
          <button onClick={() => handleScroll('right')}><FaRegArrowAltCircleRight className='button-icons' /></button>
        </div>
      </div>
      <section className="chain-section" id="chainSection">
        {vendorData.vendors && vendorData.vendors.map((vendor) => {
          return (
            <div className="vendor-box" key={vendor._id}>
              {vendor.firm.map((item) => {
                return (
                  <div key={item._id}>
                    <img src={`${API_URL}/uploads/${item.image}`} />
                  </div>
                )
              })}
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Chains