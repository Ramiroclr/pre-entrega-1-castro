import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget"
import { NavLink } from "react-router-dom";
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';

const NavBar = () => {
  const { cart, getQuantity } = useContext(CartContext)
  return (
    <div className="colorNav">
      
      <ul className="navList">
      <h2>Todo Bike</h2>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/categories/adultos'><li>Adultos</li></NavLink>
        <NavLink to='/categories/niños'><li>Niños</li></NavLink>
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
