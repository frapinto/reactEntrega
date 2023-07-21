//combinar detalles de producto y itemcount y los displayea en una card

import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({productDetail}) => {
    const {name, description, price, stock, img} = productDetail

    const onAdd = (count) =>{
        console.log(`Añadiste ${count} item(s) al carrito`);
    }
  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column' , alignItems:'center'}}>
        <h2>Detalle de: {name}</h2>
        <p>${price}</p>
        <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail;