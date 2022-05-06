import React from 'react'

import { Carousel } from 'antd'

import styles from './homeStyle.module.css'
import FeaturedBrands from './FeaturedBrands'
import MostPopularProducts from './MostPopularProducts'

export default function Home(){
    return (
            <div className={styles.homeContainer}>
                <div className={styles.carouselContainer}>
                    <h2>Carousel</h2>
                </div>
                <FeaturedBrands />
                <MostPopularProducts />
            </div>
    )
}