import React, { useState } from 'react'

import Item from '../Item/Item'
// ItemList se encarga de recibir todos los productos por Props y Mapearlos a componentes individuales.
const ItemList = ({ productsProps }) => {
// Recibimos la lista de productos por Props.


    return (
        <div className='row'>
            {/* Mapeamos la lista de productos a componentes Item.
            Es decir que estamos transformando cada producto en un componente Item.
            */}
            {productsProps?.map((element, id) => {
                return (
                    <Item itemProduct={element}/>
                )
            })}
        </div>
    )
}

export default ItemList
