import { useState } from "react"

const ItemListContainer = () => {

    const [listaDeCompras, setListaDeCompras] = useState([])
    const [input, setInput] = useState(' ')
    
    const addItem = () => {
        setListaDeCompras([...listaDeCompras, input])
    }

    return (
        <div>
            <input onChange={(event) => setInput(event.target.value)} />
            <button onClick={addItem}></button>
                {listaDeCompras.length > 0 ? (
                    <>
                        {listaDeCompras.map(producto => <p>{producto}</p>)}
                    </>
                ) : (
                    <p>El carrito está vacío</p>
                )   
                }
        </div>
    )
}

export default ItemListContainer