import { useState } from 'react'
import styles from './searchbarStyle.module.css'

import { SearchOutlined, CloseCircleOutlined } from '@ant-design/icons'
 
export default function SearchBar(){

    const [searchText, setSearchText] = useState("")

    const renderClearIcon=()=>{
        return (
            <div className={styles.clearIconContainer}>
                    <CloseCircleOutlined 
                        className={styles.clearIcon}
                        onClick={()=>{setSearchText("")}}/>
            </div>
        )
    }

    return (
        <div className={styles.searchBar}>
            <input 
                placeholder="Search Products here"
                value={searchText}
                onChange={(s)=> {setSearchText(s.target.value)}}
                className={styles.searchInput} />
            
            <div className={styles.iconContainer}>
                {searchText.length>0? renderClearIcon(): <></>}
                <div className={styles.searchIconContainer}>
                    <SearchOutlined onClick={()=>{console.log("Searched button clicked")}}/>
                </div>
            </div>
        </div>
    )
}