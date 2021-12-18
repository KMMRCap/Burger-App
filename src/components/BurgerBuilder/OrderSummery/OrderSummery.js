import React, { useContext, useEffect } from "react";
import Backdrop from './../../../common/Backdrop/Backdrop';
import { Contexts } from './../../../contexts/Context';
import $ from 'jquery'
import { Link } from "react-router-dom";

const OrderSummery = () => {

    const { orderSummery, setOrderSummery,
        meat, cheese, salad, bacon, price } = useContext(Contexts)

    useEffect(() => {
        if (orderSummery) {
            $('.order-summery').addClass('active');
            $('.backdrop').fadeIn();
        }
        else {
            $('.order-summery').removeClass('active');
            $('.backdrop').fadeOut();
        }
    }, [orderSummery])

    return (
        <>
            <div className='order-summery'>
                <h1>Your Order :</h1>
                <p>A delicious burger with the following ingredients :</p>
                <ul>
                    <li>Meat : {meat}</li>
                    <li>Bacon : {bacon}</li>
                    <li>Cheese : {cheese}</li>
                    <li>Salad : {salad}</li>
                </ul>
                <h2>Total Price : ${price.toFixed(2)}</h2>
                <p>Continue to checkout ?</p>
                <div>
                    <button onClick={() => setOrderSummery(false)}>Cancel</button>
                    <Link to={{
                        pathname: '/checkout/',
                        search: "?" + new URLSearchParams({ cheese, bacon, meat, salad }).toString()
                    }}
                    >
                        <button onClick={() => setOrderSummery(false)}>Continue</button>
                    </Link>
                </div>
            </div>
            {
                orderSummery ?
                    <Backdrop />
                    : null
            }
        </>
    );
}

export default OrderSummery;