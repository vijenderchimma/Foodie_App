import React, { useEffect, useState } from 'react'
import API_URL from './helpers/apiPath'
import axios from 'axios'
import { Link } from 'react-router-dom'

const FirmCollections = () => {
    const [firmCollection, setFirmCollection] = useState([])
    const [selectedRegion, setSelectedRegion] = useState('All')

    const firmCollectionHandler = async () => {
        try {
            const firmResponse = await axios.get(`${API_URL}/vendor/all-vendors`)
            setFirmCollection(firmResponse.data.vendors)
        } catch (error) {
            console.log(error)
            alert("Firm data not fetched")
        }
    }

    useEffect(() => {
        firmCollectionHandler()
    }, [])


    const filterHandler = (region) => {
        setSelectedRegion(region)
    }

    return (
        <>
            <h3>Restaurants with online food delivery in Hyderanad</h3>
            <div className='all-buttons'>
                <button onClick={() => filterHandler("All")}>All</button>
                <button onClick={() => filterHandler("South-Indian")}>South Indian</button>
                <button onClick={() => filterHandler("North-Indian")}>North Indian</button>
                <button onClick={() => filterHandler("Chinese")}>Chinese</button>
                <button onClick={() => filterHandler("Bakery")}>Bakery</button>
            </div>
            <section className="firm-section">
                {firmCollection && firmCollection.map((item) => {
                    return item.firm.map((eachFirm) => {
                        if (selectedRegion === "All" ||
                            eachFirm.region.includes(selectedRegion.toLocaleLowerCase())
                        ) {
                            return (
                                <Link to={`/products/${eachFirm._id}`} className='link'>
                                    <div className='firm-group-box'>
                                        <div className='firm-group'>
                                            <img src={`${API_URL}/uploads/${eachFirm.image}`} className='firm-image' alt={eachFirm.firmName} />
                                            <div className="firm-offer">
                                                {eachFirm.offer}
                                            </div>
                                        </div>
                                        <div className='firm-details'>
                                            <strong>{eachFirm.firmName}</strong>
                                            <div className='firm-area'>{eachFirm.area}</div>
                                            <div className='firm-area'>{eachFirm.region.join(', ')}</div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    })
                    return null
                })}
            </section>
        </>
    )
}

export default FirmCollections



