import products from "../Data/data";

const productsPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});