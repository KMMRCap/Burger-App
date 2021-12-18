import React, { useContext } from "react";
import { Contexts } from '../../contexts/Context';

const Backdrop = () => {

    const { setSidebar,setOrderSummery } = useContext(Contexts)

    const handleBackdropFunctions = () =>{
        setSidebar(false);
        setOrderSummery(false)
    }

    return (
        <div
            className='backdrop'
            onClick={handleBackdropFunctions}>
        </div>
    );
}

export default Backdrop;