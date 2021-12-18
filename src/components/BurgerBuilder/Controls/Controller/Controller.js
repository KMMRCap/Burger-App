import React, { useContext, useEffect } from 'react';
import classes from './Controller.module.css';
import { Contexts } from '../../../../contexts/Context';
import $ from 'jquery'

const Controller = (props) => {

    const { meat, salad, cheese, bacon } = useContext(Contexts)

    const handleIngredientNumber = (type) => {
        if (type === 'meat') {
            return meat
        } else if (type === 'salad') {
            return salad
        } else if (type === 'cheese') {
            return cheese
        } else if (type === 'bacon') {
            return bacon
        }
    }

    useEffect(() => {
        if (salad === 0) {
            $('.controls-cont div:nth-child(2) button:nth-child(2)').attr('disabled', 'disabled');
        } else {
            $('.controls-cont div:nth-child(2) button:nth-child(2)').removeAttr('disabled');
        }
        if (bacon === 0) {
            $('.controls-cont div:nth-child(3) button:nth-child(2)').attr('disabled', 'disabled');
        } else {
            $('.controls-cont div:nth-child(3) button:nth-child(2)').removeAttr('disabled');
        }
        if (cheese === 0) {
            $('.controls-cont div:nth-child(4) button:nth-child(2)').attr('disabled', 'disabled');
        } else {
            $('.controls-cont div:nth-child(4) button:nth-child(2)').removeAttr('disabled');
        }
        if (meat === 0) {
            $('.controls-cont div:nth-child(5) button:nth-child(2)').attr('disabled', 'disabled');
        } else {
            $('.controls-cont div:nth-child(5) button:nth-child(2)').removeAttr('disabled');
        }
    }, [meat, salad, cheese, bacon])

    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label + " :"}</div>
            <button
                className={classes.Less}
                onClick={props.removed}
            >Less</button>
            <button
                className={classes.More}
                onClick={props.added}>More</button>
            {': ' + handleIngredientNumber(props.type)}
        </div>
    )
};

export default Controller;