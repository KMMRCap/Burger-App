import React, { useContext, useEffect } from "react";
import Backdrop from "../Backdrop/Backdrop";
import { Contexts } from '../../contexts/Context';
import $ from 'jquery'
import Logo from './../Header/Logo';
import { NavLink } from "react-router-dom";

const Sidebar = () => {

    const { sidebar , setSidebar } = useContext(Contexts)

    useEffect(() => {
        if (sidebar) {
            $('aside').addClass('active')
        }
        else {
            $('aside').removeClass('active')
        }
    }, [sidebar])

    return (
        <>
            <aside>
                <Logo />
                <ul>
                    <li>
                        <NavLink onClick={() => setSidebar(false)} to='/'>Burger Builder</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setSidebar(false)} to='/orders'>Orders</NavLink>
                    </li>
                </ul>
            </aside>
            {sidebar ?
                <>
                    <Backdrop />
                </>
                : null}
        </>

    );
}

export default Sidebar;