import React, { useContext } from "react";
import { HiMenu } from 'react-icons/hi';
import { NavLink } from "react-router-dom";
import { Contexts } from './../../contexts/Context';
import Logo from "./Logo";

const Header = () => {

    const { setSidebar } = useContext(Contexts)

    return (
        <header>
            <HiMenu onClick={() => setSidebar(true)} />
            <div className='nav-links'>
                <NavLink to='/'>Burger Builder</NavLink>
                <NavLink to='/orders'>Orders</NavLink>
            </div>
            <Logo />
        </header>
    );
}

export default Header;