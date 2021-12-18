import React, { useContext, useEffect } from "react";
import CheckoutForm from "./Form/CheckoutForm";
import CheckoutBurger from './CheckoutBurger';
import { useLocation } from "react-router";
import { Contexts } from './../../contexts/Context';

const Checkout = () => {

    const { meat, setMeat,
        cheese, setCheese,
        bacon, setBacon,
        salad, setSalad,
        price, setPrice } = useContext(Contexts)

    let location = useLocation()

    useEffect(() => {
        let queryParams = new URLSearchParams(location.search)

        setMeat(parseInt(queryParams.get('meat')))
        setCheese(parseInt(queryParams.get('cheese')))
        setBacon(parseInt(queryParams.get('bacon')))
        setSalad(parseInt(queryParams.get('salad')))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setPrice(4 + (meat * 1.3) + (cheese * 0.4) + (bacon * 0.7) + (salad * 0.4))
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [meat, cheese, bacon, salad])

    return (
        <main className='checkout'>
            <div className='review'>
                <CheckoutBurger />
                <div className='summery'>
                    <div>
                        <h3>Selected Ingredients :</h3>
                        <ul>
                            <li>Meat : {meat}</li>
                            <li>Bacon : {cheese}</li>
                            <li>Cheese : {bacon}</li>
                            <li>Salad : {salad}</li>
                        </ul>
                        <h2>Total Price : ${price.toFixed(2)}</h2>
                    </div>
                </div>
            </div>
            <div className='information'>
                <div className='info-cont'>
                    <h1>We Hope It Taste Well</h1>
                    <h3>Please enter your information to continue :</h3>
                    <CheckoutForm />
                </div>
            </div>
        </main>
    );
}

export default Checkout;