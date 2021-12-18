import React from "react";

const SingleOrder = ({ contain, info, number, time, click }) => {

    return (
        <div className='single-order'
            onClick={click}
        >
            <div className='detail-row'>
                <h2>Order Number : {number + 1}</h2>
                <h4>Submit Time : {time}</h4>
            </div>
            <div className='contain-row'>
                <h3>It Contains :</h3>
                <ul>
                    <li>Meat : {contain.meat}</li>
                    <li>Salad : {contain.salad}</li>
                    <li>Bacon : {contain.bacon}</li>
                    <li>Cheese : {contain.cheese}</li>
                </ul>
            </div>
            <div className='price-row'>
                <h3>Price : ${contain.price.toFixed(2)}</h3>
                <h3>Ordered By : {info.name + " " + info.lastName}</h3>
            </div>
            <div className='info-row'>
                <p>Name : {info.name + " " + info.lastName}</p>
                <p>Email: {info.email}</p>
                <p>Home Address : {info.home}</p>
                <p>Postal Code : {info.postalCode}</p>
            </div>
        </div>
    );
}

export default SingleOrder;