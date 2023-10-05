import React from 'react'
import CartItem from '../CartItem/CartItem'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import "./CartListContainer.css"

const CartListContainer = ({ cart, clearCart, removeFromCart, getTotal }) => {
    return (
        <>
            <div className='cart-list-container'>
                {
                    cart.map((element) => (
                        <CartItem product={element} remove={removeFromCart} />
                    ))

                }
                <h3>Total: ${getTotal()}</h3>
            </div>

            <div className='cart-button-container'>
                <Button variant="primary" onClick={() => clearCart()}>Limpiar carrito</Button>
                <NavLink to='/order'>
                    <Button variant="primary">Confirmar compra</Button>
                </NavLink>
            </div>
        </>
    )
}

export default CartListContainer
