import products from "../Data/data";
import axios from "axios";

//Creamos una promesa con un setTimeOut adentro para simular una llamada a una Api.
export const productsPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});
export const callPromise = async (setProductListState) => {

    try {
        let promiseResult = await productsPromise;
        console.log(promiseResult);
        setProductListState(promiseResult)

    } catch (error) {
        console.log(error)
    }
}

export const callPromiseDetail = async (setProductState, id) => {
    try {
        let axiosResponse = await axios.get('https://api.npoint.io/c1db7eaa3d764082bfb5')
        let filteredProduct = axiosResponse.data.find((element) => element.id == id)
        setProductState(filteredProduct)
    } catch (error) {
        console.log(error)
    }
}

