import React, { useContext, useEffect } from "react";
import Controller from './Controller/Controller'
import classes from './Controls.module.css';
import { Contexts } from '../../../contexts/Context';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const Controls = () => {

    const { meat, setMeat,
        bacon, setBacon,
        salad, setSalad,
        cheese, setCheese,
        price, setPrice,
        purchasable, setPurchasable,
        setOrderSummery } = useContext(Contexts);

    const handleAddIngredient = (type) => {
        if (type === 'meat') {
            setMeat(meat + 1)
        } else if (type === 'salad') {
            setSalad(salad + 1)
        } else if (type === 'cheese') {
            setCheese(cheese + 1)
        } else if (type === 'bacon') {
            setBacon(bacon + 1)
        }
    }

    const handleRemoveIngredient = (type) => {
        if (type === 'meat' && meat > 0) {
            setMeat(meat - 1)
        } else if (type === 'salad' && salad > 0) {
            setSalad(salad - 1)
        } else if (type === 'cheese' && cheese > 0) {
            setCheese(cheese - 1)
        } else if (type === 'bacon' && bacon > 0) {
            setBacon(bacon - 1)
        }
    }

    const handleResetIngredients = () => {
        setMeat(0);
        setSalad(0);
        setBacon(0);
        setCheese(0);
        setPrice(4)
    }

    useEffect(() => {
        if (meat === 0 && salad === 0 && cheese === 0 && bacon === 0) {
            setPurchasable(false)
        }
        else {
            setPurchasable(true)
        }

        setPrice(4 + (meat * 1.3) + (salad * 0.4) + (bacon * 0.7) + (cheese * 0.3))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [meat, salad, cheese, bacon])

    return (
        <div className='controls-cont'>
            <h3>Current Price : ${price.toFixed(2)}</h3>
            {controls.map((item) => (
                <Controller
                    key={item.label}
                    label={item.label}
                    added={() => handleAddIngredient(item.type)}
                    removed={() => handleRemoveIngredient(item.type)}
                    type={item.type}
                />
            ))}
            <button
                className={classes.OrderButton}
                disabled={!purchasable}
                onClick={() => setOrderSummery(true)}
            >ORDER NOW
            </button>
            <button
                className={classes.Reset}
                disabled={!purchasable}
                onClick={handleResetIngredients}
            >Reset Ingredients
            </button>
        </div>
    );
}

export default Controls;