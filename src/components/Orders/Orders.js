import React, { useContext, useEffect } from "react";
import SingleOrder from "./SingleOrder";
import { Contexts } from './../../contexts/Context';
import $ from 'jquery'
import { v4 as uuidv4 } from 'uuid';
// import axios from "axios";

const Orders = () => {

    const { order, setOrder } = useContext(Contexts)

    useEffect(() => {
        let data = localStorage.getItem('orderedBurger');
        let savedOrders = JSON.parse(data);
        if (data) {
            setOrder(savedOrders)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // useEffect(() => {
    //     axios.get(`https://burger-app-f3f50-default-rtdb.firebaseio.com/orders.json`)
    //         .then(res => {
    //             setGetOrders(Object.values(res.data));
    //         })
    //         .catch(err => console.log(err))
    // }, [])

    const handleOpenBox = (index) => {
        $('.single-order .info-row').eq(index).slideToggle()
        $('.single-order .price-row h3:last-child').eq(index).fadeToggle()
    }

    return (
        <main className='orders'>
            <span>To see more info, click the order boxes</span>
            {order.map((item, index) => (
                <SingleOrder
                    key={uuidv4()}
                    number={index}
                    time={item.time}
                    contain={item.contain}
                    info={item.information}
                    click={() => handleOpenBox(index)}
                />
            ))}
        </main>
    );
}

export default Orders;