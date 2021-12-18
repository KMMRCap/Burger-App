import React, { useContext } from "react";
import Ingredients from './Ingredients/Ingredients';
import { Contexts } from '../../../contexts/Context';

const Burger = () => {

    const { meat, cheese, salad, bacon, purchasable } = useContext(Contexts)

    const burgerIngredients = { cheese, bacon, meat, salad }

    let burger = Object.keys(burgerIngredients).map(igKey => {
        return [...Array(burgerIngredients[igKey])].map((_, i) => {
            return <Ingredients key={igKey + i} type={igKey} />
        })
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    return (
        <div className='burger-cont'>
            <div className='burger'>
                <Ingredients type='bread-top' />
                {!purchasable ?
                    <h2>Please Start Adding Ingredients</h2>
                    :
                    burger}
                <Ingredients type='bread-bottom' />
            </div>
        </div>
    );
}

export default Burger;