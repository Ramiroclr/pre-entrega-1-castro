import './style.css'

const CartWidget = () => {

  const contador = 4;
  return (
    <div className="carrito">
      <img src="https://img.icons8.com/emoji/48/shopping-cart-emoji.png" alt="shopping-cart-emoji" />
      <p>{contador}</p>
    </div>
  );
}

export default CartWidget