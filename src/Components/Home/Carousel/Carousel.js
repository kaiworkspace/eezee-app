import { useState } from 'react'
import styles from './carouselStyle.module.css'

import {carouselData} from './carouselData'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

export default function Carousel(){
    
    const [c_index, setC_index] = useState(0)

    const renderCarousel=()=>{
        return (
            <img
                className={styles.carouselImg} 
                src={carouselData[c_index].imgSrc}
                onClick={()=>{
                    console.log("Carousel Clicked")
                }}>
            </img>
        )
    }
    
    const handleToggleCarousel=(event)=>{
        setC_index(Number(event.target.id))
    }

    const increment_C_index=()=>{
        if(c_index<3){
            setC_index((prevValue)=>prevValue+=1)
        }else{
            setC_index(0)
        }
    }

    const decrement_C_index=()=>{
        if(c_index>0){
            setC_index((prevValue)=>prevValue-=1)
        }else{
            setC_index(3)
        }
    }

    return (
        <div>
            <div className={styles.flexCarousel}>
                <div className={styles.carouselContainer}>
                    {renderCarousel()}
                    <div 
                        className={styles.arrowLeft}
                        onClick={decrement_C_index}>
                        <LeftOutlined />
                    </div>
                    <div 
                        className={styles.arrowRight}
                        onClick={increment_C_index}>
                        <RightOutlined />
                    </div>
                    <div className={styles.controlsContainer}>
                        <div className={c_index==0? styles.controlEN : styles.controlNA} onClick={handleToggleCarousel} id={0}></div>
                        <div className={c_index==1? styles.controlEN : styles.controlNA} onClick={handleToggleCarousel} id={1}></div>
                        <div className={c_index==2? styles.controlEN : styles.controlNA} onClick={handleToggleCarousel} id={2}></div>
                        <div className={c_index==3? styles.controlEN : styles.controlNA} onClick={handleToggleCarousel} id={3}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}