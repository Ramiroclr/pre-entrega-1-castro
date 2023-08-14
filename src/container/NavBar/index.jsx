import "./style.css";
import CartWidget from "../../components/components/CartWidget/index"



const NavBar = () => {
  return (
    <div className="colorNav">
      <h2>La Muebleria</h2>
      <ul className="navList">
        <a href="#"><li>Home</li></a>
        <a href="#"><li>Productos</li></a>
        <a href="#"><li>Nosotros</li></a>
      </ul>
      <div className="carrito">
        <CartWidget />
      </div>
    </div>
  );
}

export default NavBar
