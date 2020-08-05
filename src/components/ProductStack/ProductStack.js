import React,{useEffect, useContext, useState} from 'react'

import ProductCard from './ProductCard'
import styles from './ProductStack.module.css'
import UserContext from '../../Context/Context'
import APIConnector from '../../APIConnector/APIConnector'
import PulseLoader from '../Spinner/PulseLoader'


const ProductCardContainer = ({item}) => {
    return (
        <div className={styles.Card}>
            <ProductCard item={item}/>
        </div>
    )
}


export default function ProductStack({category, limit}) {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    let {categoryMap} = useContext(UserContext)

    useEffect(()=>{
        APIConnector.getItemsByCategory(categoryMap[category.toLowerCase()], limit).then(result=>{
            setItems(result.data)
            setIsLoading(false)
        }).catch(error=>{

        })
    },[categoryMap, limit, category])

    if (isLoading){
        return(
            <div className={styles.Loading}>
                <PulseLoader/>
            </div>
        )
    }


    return (
        <div className={styles.Cards}>
            {items.map((item, index)=>{
                return <ProductCardContainer item={item} key={index}/>
            })}
        </div>
    )
}
