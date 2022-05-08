import React from 'react'
import { useLocation } from 'react-router-dom'

import styles from './style.module.css'
import ProductDisplay from './ProductDisplay'
// location.state

export default function Product(){
    const location = useLocation()
    return(
        <div className={styles.mainFlex}>
            <div className={styles.mainContainer}>
                <div className={styles.leftContainer}>
                    <ProductDisplay productInfo={location.state}/>
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.priceContainer}>
                        $60.00                        
                    </div>
                    <div className={styles.quantityContainer}>
                        Quantity: 
                    </div>
                    <div className={styles.buttonContainer}>
                        <div>Add to Cart</div>
                        <div>Add to Favourites</div>
                    </div>
                </div>
            </div>
        </div>
    )
}