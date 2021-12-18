import { Form, Formik } from "formik";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import CheckoutInput from './CheckoutInputs';
import { Contexts } from './../../../contexts/Context';
// import axios from "axios";

const CheckoutForm = () => {

    const { meat, setMeat,
        bacon, setBacon,
        cheese, setCheese,
        salad, setSalad,
        price, setPrice,
        order, setOrder } = useContext(Contexts);

    const navigate = useNavigate();

    let ordered = {};

    const createdTimeFormatter = (date) => {
        const todoDate = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
        const todoTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        return `${todoDate} - ${todoTime}`
    }

    const handleSetBurger = (values) => {
        let contain = { meat, cheese, salad, bacon, price }
        ordered = { contain, information: values, time: createdTimeFormatter(new Date()) }
        setOrder([...order, ordered])

        // axios.post(`https://burger-app-f3f50-default-rtdb.firebaseio.com/orders.json`, ordered)
        //     .then(res => console.log("successful"))
        //     .catch(err => console.log(err));
            
        setMeat(0);
        setBacon(0);
        setCheese(0);
        setSalad(0);
        setPrice(4);
    }

    useEffect(() => {
        let data = localStorage.getItem('orderedBurger');
        let savedOrders = JSON.parse(data);
        if (data) {
            setOrder(savedOrders)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        localStorage.setItem('orderedBurger', JSON.stringify(order))
    }, [order])

    return (
        <Formik
            initialValues={{
                name: '',
                lastName: '',
                email: '',
                home: '',
                postalCode: '',
            }}

            validate={values => {
                const errors = {};

                if (!values.name) {
                    errors.name = 'required';
                } else if (values.name.match(/\d+/g)) {
                    errors.name = 'should be a text'
                }

                if (!values.lastName) {
                    errors.lastName = 'required';
                } else if (values.lastName.match(/\d+/g)) {
                    errors.lastName = 'should be a text '
                }

                if (!values.email) {
                    errors.email = 'required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = 'invalid email';
                }

                if (!values.home) {
                    errors.home = 'required';
                }

                if (!values.postalCode) {
                    errors.postalCode = 'required';
                } else if (values.postalCode.match(/^[A-Za-z]+$/)) {
                    errors.postalCode = 'should be a number'
                } else if (values.postalCode.length < 11) {
                    errors.postalCode = 'at least 11 chars';
                }

                return errors;
            }}

            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    handleSetBurger(values);
                    navigate('/orders');
                }, 400);
            }}
        >
            <Form>
                <div className='form-row'>
                    <CheckoutInput
                        name="name"
                        placeholder="Name"
                        type="text"
                    />
                    <CheckoutInput
                        name="lastName"
                        placeholder="Last Name"
                        type="text"
                    />
                </div>
                <CheckoutInput
                    name="email"
                    placeholder="Email Address"
                    type="email"
                />
                <CheckoutInput
                    name="home"
                    placeholder="Home Address"
                    type="text"
                />
                <CheckoutInput
                    name="postalCode"
                    placeholder="Postal Code"
                    type="text"
                />
                <h3>Press order to navigate to thr bank port</h3>
                <div className="submit-row">
                    <button type="submit">Order</button>
                </div>
            </Form>
        </Formik>
    );
}

export default CheckoutForm;