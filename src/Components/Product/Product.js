import React from 'react'
import { useLocation } from 'react-router-dom'



export default function Product(){
    const location = useLocation()
    return(
        <>
            This is the product page
            <button onClick={()=>{
                console.log(location.state)
            }}>Click Me</button>
        </>
    )
}