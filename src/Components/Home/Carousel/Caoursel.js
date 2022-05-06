import styles from './carouselStyle.module.css'

export default function Carousel(){
    return (
        <div>
            <div className={styles.flexCarousel}>
                <div className={styles.carouselContainer}>
                    <p>Carousel</p>
                </div>
            </div>
        </div>
    )
}