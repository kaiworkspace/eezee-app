import React from 'react'
import { useLocation } from 'react-router-dom'

import styles from './productStyle.module.css'
import ProductDisplayLeft from './ProductDisplayLeft'
import ProductDisplayRight from './ProductDisplayRight'

export default function Product(){
    const location = useLocation()
    return(
        <div className={styles.mainFlex}>
            <div className={styles.mainContainer}>
                <div className={styles.leftContainer}>
                    <ProductDisplayLeft productInfo={location.state}/>
                </div>
                <div className={styles.rightContainer}>
                    <ProductDisplayRight productInfo={location.state}/>
                </div>
            </div>
        </div>
    )
}