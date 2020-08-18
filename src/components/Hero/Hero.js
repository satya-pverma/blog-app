  
import React from 'react';
import './style.css';
import Card from '../UI/Card/Card';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/NavBar';

/**
* @author
* @function Hero
**/

const Hero = (props) => {
  return(
    <div>
        <Card>
            <div style={{ padding: '50px 0'  }}>
            <Logo />
            </div>
            <Navbar />
        </Card>
    </div>
   )

 }

export default Hero