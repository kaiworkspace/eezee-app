import { useContext, useState } from "react"

import { PlusOutlined, MinusOutlined, UnderlineOutlined, AlertTwoTone } from '@ant-design/icons'
import styles from './productDisplayRightStyle.module.css'

import CartContext from '../../../CartContext'

export default function ProductDisplayRight(props){
    
    const productInfo = props.productInfo.data
    const [productCount, setProductCount] = useState(1)
    const [countDisplay, setCountDisplay] = useState(1)
    const [cartCount, setCartCount] = useState(0)

    const {cartItemCount, setCartItemCount} = useContext(CartContext)

    const handleCountChange=(event)=>{
        setCountDisplay(event.target.value)
        if(isNaN(Number(event.target.value))){
            
        }
        else{
            setProductCount(Number(event.target.value))
            setCountDisplay(Number(event.target.value))
        }
        
    }

    const handleIncrement=()=>{
        if(isNaN(Number(countDisplay))){
            setCountDisplay(2)
            setProductCount(2)
        }else{
            setProductCount((prevCount)=> prevCount += 1)
            setCountDisplay((prevCount)=> prevCount += 1)
        }
    }

    const handleDecrement=()=>{
        if(isNaN(Number(countDisplay))){
            setCountDisplay(1)
            setProductCount(1)
        }
        else{
            if(productCount>1){
                setProductCount((prevCount)=> prevCount -= 1)
                setCountDisplay((prevCount)=> prevCount-=1)
            }
        }
    }

    const addToCart=()=>{
        setCartItemCount((prevCount)=> prevCount + productCount)
        alert("Items has been added to cart")
        console.log(productCount)
    }

    return (
        <>
            <div className={styles.priceContainer}>
                <div className={styles.currency}>
                    S$
                </div>
                <div className={styles.price}>
                    {productCount==""||productCount<=0? productInfo.productPrice.toFixed(2): (productInfo.productPrice * productCount).toFixed(2)}
                </div>
            </div>
            <div className={styles.quantityContainer}>
                <div>
                    Quantity:
                </div>
                <div className={styles.quantityCounter}>
                    <div 
                        className={styles.icon}
                        onClick={handleDecrement}>
                        <MinusOutlined />
                    </div>
                    <div className={styles.quantityInputContainer}>
                        <input 
                            className={styles.quantityInput}
                            placeholder="1"
                            value={countDisplay}
                            onChange={handleCountChange}>
                        </input>
                    </div>
                    <div 
                        className={styles.icon}
                        onClick={handleIncrement}>
                        <PlusOutlined />
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.buttonContainer}>
                    <h3 
                        className={styles.addToCartButton}
                        onClick={addToCart}>
                            Add to Cart</h3>
                </div>
                <div className={styles.buttonContainer}>
                    <h3 className={styles.addToFavButton}>Add to Favourites</h3>
                </div>
            </div>
        </>
    )
}