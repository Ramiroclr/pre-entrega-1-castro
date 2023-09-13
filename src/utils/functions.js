import products from "../Data/data";
import axios from "axios";

//Creamos una promesa con un setTimeOut adentro para simular una llamada a una Api.
export const productsPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});

export const callPromise = async (id) => {
    // Llamamos con axios a nuestro JSON y guardamos el resultado en la variable axiosResponse.
    let axiosResponse = await axios.get('https://api.npoint.io/c1db7eaa3d764082bfb5');
    /* Extraemos el resultado de la llamada de axios 
    que está en la propiedad .data y lo guardamos en la variable productsArray.*/
    let productsArray = axiosResponse.data;
    try {
        // Creamos una condición para preguntar si es que la categoría existo o no en los Params.
        if(id){
            // Si la categoria existe en los Params, filtramos los productos con .filter
            // filter crea un nuevo array filtrando según la condiciónque nosotros le pasemos
            // Ya que filter crea un nuevo array,podemos guardar este array en la variable filteredProducts
            // y la retornamos.
            let filteredProducts = productsArray.filter((element) => element.category == id)
            return filteredProducts;
        }else{
            // Si la categoría no existe, directamente devolvemos el array entero de productos sin filter.
            return productsArray;
        }

    } catch (error) {
        console.log(error)
    }
}

/*
    Pasos para traerme productos desde la API
    1. Crear un JSON que contenga un array de objetos (productos) en una página que sirva para alojar JSON
        Ej: npoint.io, jsonbin.io.
    2. Copiar el enlace del JSON que creamos en la página.
        Ej: https://api.npoint.io/c1db7eaa3d764082bfb5
    3. Crear una función que pida el JSON con axios(método .get)
    4. Llamar a la función en dónde sea más conveniente.
    En React generalmente,llamamos a la función dentro de un hook 'useEffect'.
*/

export const callPromiseDetail = async (setProductState, id) => {
    try {
        let axiosResponse = await axios.get('https://api.npoint.io/c1db7eaa3d764082bfb5')
        
        let filteredProduct = axiosResponse.data.find((element) => element.id == id)
        setProductState(filteredProduct)
    } catch (error) {
        console.log(error)
    }
}

