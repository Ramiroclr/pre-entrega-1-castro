import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import CartListContainer from '../CartListContainer/CartListContainer';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const CartView = () => {
    const {cart, removeFromCart, clearCart, getTotal} = useContext(CartContext)
    
    return (
        <div>
            {
                cart.length > 0 ? (
                    
                    <CartListContainer cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} getTotal={getTotal}/>
                    
                ):(
                    <h2>El carrito está vacío</h2>
                )
            }
            
        </div>
    )
}

export default CartView
