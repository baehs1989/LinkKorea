import React,{useContext, useEffect,useState} from 'react'
import {useParams} from "react-router-dom";
import {useHistory} from 'react-router-dom'

import PageContainer from '../../hoc/PageContainer'
import ProductStack from '../ProductStack/ProductStack';
import PageToolBar from '../PageToolBar/PageToolBar';

import styles from './CatgoryPage.module.css'
import UserContext from '../../Context/Context'

const styleMapp={
    'book':{
        backgroundPosition: "center 20%"
    },
    'fashion':{
        backgroundPosition: "center 25%",
        color:'white'
    },
    'living':{
        backgroundPosition: "center 70%"
    },
    'beauty':{
        backgroundPosition: "center 10%",
        color:'white'
    },
    'kids':{
        backgroundPosition: "center 30%",
    },
    'pets':{
        backgroundPosition: "center 50%",
        color:'white'
    }

}

export default function CategoryPage() {
    let {name} = useParams()
    const [category, setCategory] = useState(name)
    let categories = useContext(UserContext).categories.map(category=>category.toLowerCase())
    const history = useHistory()

    if (! categories.includes(name)){
        history.push('/')
    }

    useEffect(()=>{
        setCategory(name)
    },[name])

    return (
        <PageContainer>
            <div className={styles.Container}>
                <div className={styles.Header} style={{backgroundImage:`url("/assets/images/${name}.jpg")`, ...styleMapp[name]}}>
                    <div className={styles.HeaderBackground}>

                    </div>
                    <div className={styles.CategoryTitle}>
                        {category}
                    </div>
                </div>
                <div className={styles.Body}>
                    <div className={styles.ToolBar}>
                        <PageToolBar/>
                    </div>
                    <div className={styles.ProductList}>
                        <ProductStack category={category}/>
                    </div>
                </div>

            </div>
        </PageContainer>

    )
}
