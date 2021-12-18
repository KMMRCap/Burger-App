import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/burger-logo.png'

const Logo = () => {
    return (
        <Link to='/'>
            <div className='logo-cont'>
                <img src={logo} alt='logo' />
            </div>
        </Link>
    );
}

export default Logo;