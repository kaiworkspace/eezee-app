import { useState } from 'react'
import {Input} from 'antd'
import { PhoneOutlined, ShoppingCartOutlined} from '@ant-design/icons'
import SearchBar from './SearchBar'

import {info} from './info'
import styles from './navbarStyle.module.css'

const { Search } = Input

export default function Navbar(){
    
    const [cartItemCount, setCartItemCount] = useState(0)

    return (
        <div>
            <div className={styles.flexTop}>
                <div className={styles.topBarContainer}>
                    <div className={styles.topBarInfoContainer}>
                        <div className={styles.topBarRegion}>
                            <img
                                src="https://flagcdn.com/h20/sg.png"
                                srcset="https://flagcdn.com/h40/sg.png 2x,
                                    https://flagcdn.com/h60/sg.png 3x"
                                height="20"
                                alt="Singapore"/>
                            <p className={styles.topBarText}>{info.country}</p>
                        </div>
                        <div className={styles.topBarContact}>
                            <PhoneOutlined />
                            <p className={styles.topBarText}>{info.contact}</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className={styles.flexMid}>
                <div className={styles.mainContainer}>
                    <div className={styles.mainLeftContainer}>
                        <img 
                            className={styles.logo}
                            to="/"
                            src='https://api.eezee.sg/image/resize?height=44&width=150&url=https://storage.googleapis.com/imgez/eezee-logos/word-whitebg.png'/>
                        <SearchBar />
                    </div>
                    
                    <div className={styles.mainRightContainer}>
                        <div className={styles.cartCount}>
                            {cartItemCount}
                        </div>
                        <ShoppingCartOutlined className={styles.cartIcon}/>
                    </div>
                </div>
            </div>
            <div className={styles.flexBottom}>
                <div className={styles.bottomContainer}>
                    <div className={styles.bottomText}>
                        <p>View All Brands</p>
                    </div>
                </div>
            </div>
        </div>
    )
}