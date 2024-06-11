import React, { useState } from 'react'
import { itemData } from '../data'

const ItemsDisplay = () => {
    const [displayItem,setDisplayItem] = useState(itemData)
  return (
    <div className="item-section">
        {displayItem.map(item=>{
            return (
                <div className='static-images-container' key={item.item_name}>
                    <img src = {item.item_image} alt = {item.item_image}/>
                    <p>{item.item_name}</p>
                </div>
            )
        })}
    </div>
  )
}

export default ItemsDisplay