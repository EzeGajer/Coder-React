import React from 'react'
import "./ItemListContainer.css"

const ItemListContainer = (props) => {
  return (
    <div className="container">
      <h1 className='text'>{props.bienvenida}</h1>
    </div>
  )
}

export default ItemListContainer

