import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget"
import { NavLink } from "react-router-dom";
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';

const NavBar = () => {
  const { cart, getQuantity } = useContext(CartContext)
  return (
    <div className="colorNav">
      <h2>Todo Bike</h2>
      <ul className="navList">
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/categories/1'><li>Elegantes</li></NavLink>
        <NavLink to='/categories/2'><li>Deportivos</li></NavLink>
      </ul>
      {
        cart.length > 0 && (
          <div className="carrito">
            <NavLink to='/cart'>
              <CartWidget getQuantity={getQuantity} />
            </NavLink>
          </div>
        )
      }

    </div>
  );
}

export default NavBar
