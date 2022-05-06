import React from 'react'

import styles from './homeStyle.module.css'
import FeaturedBrands from './FeaturedBrands'
import MostPopularProducts from './MostPopularProducts'
import Carousel from './Carousel'

export default function Home(){
    return (
            <div className={styles.homeContainer}>
                <Carousel />
                <FeaturedBrands />
                <MostPopularProducts />
            </div>
    )
}