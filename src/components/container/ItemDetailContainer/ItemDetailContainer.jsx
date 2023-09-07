import React, { useEffect, useState } from 'react'
import ItemDetail from '../../ItemDetail/ItemDetail'
import { callPromiseDetail } from '../../../utils/functions';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
    const [productState, setProductState] = useState()
    let {id} = useParams()
    useEffect(() => {
        callPromiseDetail(setProductState, id)
    }, [])
    return (

        <div>
            <ItemDetail product={ productState }/>
        </div>
    )
}

export default ItemDetailContainer
