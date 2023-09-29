import React, { useEffect, useState } from 'react'
import ItemDetail from '../../ItemDetail/ItemDetail'
import { callPromiseDetail, fetchProductFirebase } from '../../../utils/functions';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';

const ItemDetailContainer = () => {
    const [productState, setProductState] = useState()
    const [loading, setLoading] = useState(false)
    let { id } = useParams()
    const asyncFunction = async () => {
        setLoading (true)
        setTimeout ( async () => {
        let product = await fetchProductFirebase(id)
        setProductState(product)
        setLoading (false)
        }, 1500)
    }
    useEffect(() => {
        asyncFunction(id)
    }, [])

    return (

        <div>
            {
                loading ? (
                    <ReactLoading type={'bubbles'} color={'white'} height={125} width={110} />
                    )
                :
                (
                    <ItemDetail product={productState} />
                )
            }
            
        </div>
    )
}

export default ItemDetailContainer
