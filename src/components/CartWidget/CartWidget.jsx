import './style.css'

const CartWidget = ({getQuantity}) => {

  return (
    <div className="carrito">
      <img src="https://img.icons8.com/emoji/48/shopping-cart-emoji.png" alt="shopping-cart-emoji" />
      <p>{getQuantity()}</p>
    </div>
  );
}

export default CartWidget