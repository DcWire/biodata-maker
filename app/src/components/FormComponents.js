import React, {useState, useEffect} from 'react';

const FormComponents = (props) => {
    const {values, setValues} = props;

    const handleChangeValues = (name) => (event) =>  {
        setValues({
            ...values,
            [name]: event.target.value
        })
        // console.log(values);

    } 

    const handleDelete = (name) => (event) => {
        event.preventDefault();
        const {[name]: deleted, ...rest} = values;
        setValues(rest);
    }

    return (
        <div>
            {
                Object.keys(values)?.map((val, index) => {
                    return val ? (
                        <div key={index}>
                            <label htmlFor={val}>{val.charAt(0).toUpperCase() + val.slice(1)}</label>
                            <input type='text' id={val} value={values[val]} onChange={handleChangeValues(val)} />
                            <button onClick={handleDelete(val)}>Delete</button>
                        </div>
                    ) : null
                })
                    
            }
        </div>
    )
}


export default FormComponents;