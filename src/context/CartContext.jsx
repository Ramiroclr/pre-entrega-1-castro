import React, { createContext, useState } from 'react'
// Creamos el contexto con el hook createContext.
export const CartContext = createContext({});

// Extraemos el Provider con Destructuring.
// El Provider se va a encargar de inyectar todas las variables y funciones del contexto
// en todos los componetes del proyecto.
const { Provider } = CartContext;

const ejemploCarrito = [
  {
    item: {
      nombre: 'ropa',
      precio: '$1000'
    },
    quantity: 5
  },
  {
    item: {
      nombre: 'ropa',
      precio: '$1000'
    },
    quantity: 5
  },
  {
    item: {
      nombre: 'ropa',
      precio: '$1000'
    },
    quantity: 5
  }
]


// Acá creamos el contenedor de todas las variables, estados y funciones que va a contener el contexto
// Todo lo que esté a dentro de cartProvider va a estar disponible para todos los componentes del proyecto.
const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue)

  // Función para agregar elementos al cart.
  const addToCart = (item, quantity) => {
    const currentProductIndex = isInCart(item.id)
    console.log(currentProductIndex)
    if (currentProductIndex != -1) {
      const cartCopy = [...cart]

      cartCopy[currentProductIndex].quantity = cartCopy[currentProductIndex].quantity + quantity;

      setCart(cartCopy)
      console.log('Cantidad cambiada exitosamente')
      return ('Cantidad cambiada exitosamente')

    }
    setCart([
      ...cart,
      {
        item: item,
        quantity
      }
    ])
    console.log('Producto agregado exitosamente')
    return('Producto agregado exitosamente')
  }

  const isInCart = (id) => {
    return cart.findIndex((element) => element.item.id == id)
  }

  const clearCart = () => {
    setCart([])
  }

  const removeFromCart = (id) => {
    const cartCopy = [...cart]
    const filteredProducts = cartCopy.filter((element) => element.item.id != id)
    setCart(filteredProducts)
  }

  const getQuantity = () => {
    let cantidad = 0
    cart.forEach((element) => cantidad = cantidad + element.quantity)
    return cantidad
}

const getTotal = () => {
    let total = 0
    cart.forEach((element) => {
        total = total + (element.quantity * element.item.price)
    })
    return total
}

  let context = {
    cart,
    addToCart,
    getQuantity,
    getTotal,
    removeFromCart,
    clearCart
  }

  return (
    <Provider value={context}>
      {children}
    </Provider>
  )
}

export default CartProvider
