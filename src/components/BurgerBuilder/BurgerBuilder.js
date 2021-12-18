import React from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";
import OrderSummery from './OrderSummery/OrderSummery';

const BurgerBuilder = () => {
    return (
        <main className='burger-builder'>
            <Burger />
            <Controls />
            <OrderSummery />
        </main>
    );
}

export default BurgerBuilder;