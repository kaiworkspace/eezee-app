import styles from "./featurebrandStyle.module.css"

export default function FeaturedBrands(){
    return (
        <div className={styles.featureBrandContainer}>
            <h3>Featured Brands</h3>
            <div>
                <h4>Browse the full catalog of brands today</h4>
                <div>
                    <p>View More</p>
                    <p>icon</p>
                </div>
            </div>
            <div className={styles.brandContainer}>
                
            </div>
        </div>
    )
}