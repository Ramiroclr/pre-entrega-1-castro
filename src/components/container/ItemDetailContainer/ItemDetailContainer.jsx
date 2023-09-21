import React, { useEffect, useState } from 'react'
import ItemDetail from '../../ItemDetail/ItemDetail'
import { callPromiseDetail, fetchProductFirebase } from '../../../utils/functions';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [productState, setProductState] = useState()
    let { id } = useParams()
    const asyncFunction = async () => {
        let product = await fetchProductFirebase(id)
        setProductState(product)
    }
    useEffect(() => {
        asyncFunction(id)
    }, [])

    return (

        <div>
            <ItemDetail product={productState} />
        </div>
    )
}

export default ItemDetailContainer
