import { useState} from 'react'
import styles from './productDisplayLeftStyle.module.css'

export default function ProductDisplayLeft(props){
    
    const productInfo = props.productInfo.data

    const [c_index, setC_index] = useState(0)

    let carouselArr = []
    const carouselImgLink = productInfo.additionalInfo.additionalImg.map((img)=>{
        const resizeValues = "height=50&width=50"
        const oldURL = img.split("height=360&width=720")
        const newURL = oldURL[0] + resizeValues + oldURL[1]
        carouselArr.push(newURL)
    })

    const showNewImg=(event)=>{
        // console.log(Number(event.target.id))
        setC_index(Number(event.target.id))
    }

    const renderCarousel=carouselArr.map((p,index)=>{
        return (
            <div 
                className={c_index==index? styles.carouselImgEN: styles.carouselImgNA}>
                    <img 
                        src={p}
                        onClick={showNewImg}
                        id={index}>
                    </img>
            </div>
        )
    })

    const renderProductDescription=productInfo.additionalInfo.description.map((para)=>{
        if(para.type == "title"){
            return (
                <h3>{para.text}</h3>
            )
        }
        else if(para.type == "title_description"){
            return (
                <p>{para.text}</p>
            )
        }
        else if(para.type=="main"){
            return (
                <p>{para.text}</p>
            )
        }
        else if(para.type == "header"){
            return (
                <h4>{para.text}</h4>
            )
        }
        else if(para.type == "note"){
            return (
                <p>{para.text}</p>
            )
        }
        else if(para.type == "list"){
            return(
                para.text.map((listItem)=>{
                    return (
                        <li>{listItem}</li>
                    )
                })
            )
        }
    })

    return (
        <div className={styles.mainContainer}>
            <div className={styles.productName}>
                <h3>{productInfo.productName}</h3>
            </div>
            <div className={styles.modelBrandContainer}>
                <div className={styles.modelBrandSubContainer}>
                    <div className={styles.modelBrandLeft}>Model: </div>
                    <div className={styles.modelBrandRight}>{productInfo.additionalInfo.model}</div>
                </div>
                <div className={styles.modelBrandSubContainer}>
                    <div className={styles.modelBrandLeft}>Brand: </div>
                    <div className={styles.modelBrandRight}>{productInfo.additionalInfo.brand}</div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <img src={productInfo.additionalInfo.additionalImg[c_index]}></img>
            </div>
            <div className={styles.productCarousel}>
                {renderCarousel}
            </div>
            <div className={styles.productDescriptionContainer}>
                <h3>Product Description</h3>
                {renderProductDescription}
            </div>
        </div>
    )
}