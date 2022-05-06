import styles from "./featurebrandStyle.module.css"

import { RightOutlined } from '@ant-design/icons'

// simulate api fetching
import {brands} from './brands'

export default function FeaturedBrands(){
    
    const renderBrands=brands.map((brand)=>{
        return (
            <div
                key={brand.id} 
                className={styles.brandCard}
                onClick={()=>{console.log("Card Clicked")}}>
                <img src={brand.imgSrc}></img>
                <h3>{brand.brandName}</h3>
                <p>{brand.numberOfProducts}</p>
            </div>
        )
    })
    

    return (
        <div className={styles.featureBrandContainer}>
            <div className={styles.featureBrandSubContainer}>
                <h3 className={styles.title}>Featured Brands</h3>
                <div className={styles.descriptionContainer}>
                    <div className={styles.description}>
                        <h4>Browse the full catalog today</h4>
                    </div>
                    <div className={styles.viewMoreContainer}>
                        <p>View More</p>
                        <RightOutlined />
                    </div>
                </div>
                <div className={styles.brandContainer}>
                    {renderBrands}
                </div>
            </div>
        </div>
    )
}