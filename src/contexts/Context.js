import React, { createContext, useState } from "react";

export const Contexts = createContext({
    meat: '', setMeat: () => { },
    cheese: '', setCheese: () => { },
    bacon: '', setBacon: () => { },
    salad: '', setSalad: () => { },
    price: '', setPrice: () => { },
    purchasable: false, setPurchasable: () => { },
    sidebar: false, setSidebar: () => { },
    orderSummery: false, setOrderSummery: () => { },
    order: [], setOrder: () => { },
});

export const ContextWrapper = (props) => {

    const [meat, setMeat] = useState(0);
    const [cheese, setCheese] = useState(0);
    const [bacon, setBacon] = useState(0);
    const [salad, setSalad] = useState(0);
    const [price, setPrice] = useState(4);
    const [purchasable, setPurchasable] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const [orderSummery, setOrderSummery] = useState(false);
    const [order, setOrder] = useState([]);


    return (
        <Contexts.Provider value={
            {
                meat, setMeat,
                cheese, setCheese,
                bacon, setBacon,
                salad, setSalad,
                price, setPrice,
                purchasable, setPurchasable,
                sidebar, setSidebar,
                orderSummery, setOrderSummery,
                order, setOrder
            }
        }>
            {props.children}
        </Contexts.Provider>
    )
}