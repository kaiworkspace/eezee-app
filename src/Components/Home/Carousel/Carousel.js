import { useState } from 'react'
import styles from './carouselStyle.module.css'

import {carouselData} from './carouselData'

export default function Carousel(){
    
    const [c_index, setC_index] = useState(0)

    const renderCarousel=()=>{
        return (
            <img src={carouselData[c_index].imgSrc}></img>
        )
    }
    
    // TODO: update controls style when user click

    return (
        <div>
            <div className={styles.flexCarousel}>
                <div className={styles.carouselContainer}>
                    {renderCarousel()}
                    <div className={styles.controlsContainer}>
                        <div className={styles.control}></div>
                        <div className={styles.control} value={1}></div>
                        <div className={styles.control} value={2}></div>
                        <div className={styles.control} value={3}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}