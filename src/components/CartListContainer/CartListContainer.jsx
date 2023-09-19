import React from 'react'
import CartItem from '../CartItem/CartItem'
import Button from 'react-bootstrap/Button';

const CartListContainer = ({cart, clearCart, removeFromCart, getTotal}) => {
    return (
        <div>
            {
                cart.map((element) => (
                    <CartItem product={element} remove={removeFromCart}/> 
                ))
                
            }
            <h3>Total: ${getTotal()}</h3>
            <Button variant="primary" onClick={() => clearCart()}>Limpiar carrito</Button>
        </div>
    )
}

export default CartListContainer
