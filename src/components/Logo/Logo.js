import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'

const Logo=(props)=>{
    return(
        <div className="logo">
         <Link to="/" className="logo-link">  Satya.p.verma</Link> 

        </div>
    )
}
export default Logo