import React from 'react'
import './OrderItem.css'

const OrderItem = ({product}) => {
    return (
        <div>
            <span className='order-item-title'>{product.item.title}</span>
            <span className='order-item-quantity'>Cantidad: {product.quantity}</span>
            <span className='order-item-total'>Precio Total: ${product.quantity * product.item.price}</span>
        </div>
    )
}

export default OrderItem
