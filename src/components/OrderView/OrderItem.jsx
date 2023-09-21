import React from 'react'

const OrderItem = ({product}) => {
    return (
        <div>
            <span>{product.item.title}</span>
            <span>{product.quantity}</span>
            <span>Precio Total: ${product.quantity * product.item.price}</span>
        </div>
    )
}

export default OrderItem
