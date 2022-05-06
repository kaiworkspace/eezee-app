import {Input} from 'antd'
import { SearchOutlined, PhoneOutlined} from '@ant-design/icons'


import {info} from './info'
import styles from './navbarStyle.module.css'

const { Search } = Input

export default function Navbar(){
    return (
        <>
            <div className={styles.topBarContainer}>
                <div className={styles.topBarElement}>
                    <img
                        src="https://flagcdn.com/h20/sg.png"
                        srcset="https://flagcdn.com/h40/sg.png 2x,
                            https://flagcdn.com/h60/sg.png 3x"
                        height="20"
                        alt="Singapore"/>
                    <p>{info.country}</p>
                </div>
                <div className={styles.topBarElement}>
                    <PhoneOutlined />
                    <p>{info.contact}</p>
                </div>
            </div>
            <div className={styles.mainContainer}>
                <div>
                    <img src='https://api.eezee.sg/image/resize?height=44&width=150&url=https://storage.googleapis.com/imgez/eezee-logos/word-whitebg.png'/>
                    <p>View All brands</p>
                </div>
                <div>
                    <Input.Search placeholder="input search text" renderIcon={<SearchOutlined />}/>
                </div>
                <div>
                    Cart
                </div>
            </div>
        </>
    )
}