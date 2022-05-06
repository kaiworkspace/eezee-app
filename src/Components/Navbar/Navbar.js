import {Input} from 'antd'
import { PhoneOutlined} from '@ant-design/icons'
import SearchBar from './SearchBar'

import {info} from './info'
import styles from './navbarStyle.module.css'

const { Search } = Input

export default function Navbar(){
    return (
        <>
            <div className={styles.topBarContainer}>
                <div className={styles.topBarInfoContainer}>
                    <div className={styles.topBarElement}>
                        <img
                            src="https://flagcdn.com/h20/sg.png"
                            srcset="https://flagcdn.com/h40/sg.png 2x,
                                https://flagcdn.com/h60/sg.png 3x"
                            height="20"
                            alt="Singapore"/>
                        <p className={styles.topBarText}>{info.country}</p>
                    </div>
                    <div className={styles.topBarElement}>
                        <PhoneOutlined />
                        <p className={styles.topBarText}>{info.contact}</p>
                    </div>

                </div>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.mainLeftContainer}>
                    <img 
                        className={styles.logo}
                        to="/"
                        src='https://api.eezee.sg/image/resize?height=44&width=150&url=https://storage.googleapis.com/imgez/eezee-logos/word-whitebg.png'/>
                    <SearchBar />
                </div>
                
                <div>
                    Cart
                </div>
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.bottomText}>
                    <p>View All Brands</p>
                </div>
            </div>
        </>
    )
}