import React, { useContext } from "react";
import Ingredients from './../BurgerBuilder/Burger/Ingredients/Ingredients';
import { Contexts } from './../../contexts/Context';

const CheckoutBurger = () => {

    const { meat, cheese, bacon, salad } = useContext(Contexts)

    const params = { cheese, bacon, meat, salad }

    let burger = Object.keys(params).map(igKey => {
        return [...Array(params[igKey])].map((_, i) => {
            return <Ingredients key={igKey + i} type={igKey} />
        })
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);


    return (
        <div className='burger-cont'>
            <div className='burger'>
                <Ingredients type='bread-top' />
                {burger}
                <Ingredients type='bread-bottom' />
            </div>
        </div>
    );
}

export default CheckoutBurger;