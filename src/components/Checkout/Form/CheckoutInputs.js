import { React } from 'react';
import { Field, ErrorMessage } from 'formik';

const CheckoutInput = (props) => {
    return (
        <div className='form-input'>
            <Field
                id={props.name}
                name={props.name}
                placeholder={props.placeholder}
                type={props.type}
                maxLength={props.max ? props.max : null}
            />
            <span>
                <ErrorMessage name={props.name} />
            </span>
        </div>
    );
}

export default CheckoutInput;