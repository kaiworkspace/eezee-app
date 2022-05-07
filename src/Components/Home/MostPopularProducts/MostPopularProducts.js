import styles from './product.module.css'
import { Link } from 'react-router-dom'
import {product} from './product'

export default function MostPopularProducts(){
    
    const renderProducts=product.map((p)=>{
        return (
                <div
                    key={p.productId}
                    className={styles.productCard}
                    onClick={()=>{console.log("Product clicked")}}>
                        <Link
                            className={styles.link} 
                            to="/product"
                            state={{data: "OK"}}></Link>
                        <img
                            className={styles.image} 
                            src={p.productImg}></img>
                        <div className={styles.priceContainer}>
                            <p className={styles.currency}>S$</p>
                            <h3>{p.productPrice}</h3>
                        </div>
                        <p className={styles.productName}>{p.productName}</p>
                </div>
        )
    })
    

    return (
        <div className={styles.popularProductContainer}>
            <div className={styles.popularProductSubContainer}>
                <h3 className={styles.title}>Our Most Popular Products</h3>
                <div className={styles.descriptionContainer}>
                    <div className={styles.description}>
                        <h4>Trusted by the best companies in Asia</h4>
                    </div>
                </div>
                <div className={styles.productContainer}>
                    {renderProducts}
                </div>
            </div>
        </div>
    )
    
}