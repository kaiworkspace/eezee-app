import React from 'react'

import { Carousel } from 'antd'

import styles from './homeStyle.module.css'
import FeaturedBrands from './FeaturedBrands'

export default function Home(){
    return (
            <div>
                <div className={styles.carouselContainer}>
                    <h2>Carousel</h2>
                </div>
                <FeaturedBrands />
            </div>
    )
}