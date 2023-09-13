import "./NavBar.css";
import CartWidget from "../CartWidget/index"
import { NavLink } from "react-router-dom";



const NavBar = () => {
  return (
    <div className="colorNav">
      <h2>La Muebleria</h2>
      <ul className="navList">
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/categories/1'><li>Elegantes</li></NavLink>
        <NavLink to='/categories/2'><li>Deportivos</li></NavLink>
      </ul>
      <div className="carrito">
        <CartWidget />
      </div>
    </div>
  );
}

export default NavBar
