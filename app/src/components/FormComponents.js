import React, {useState, useEffect} from 'react';

const FormComponents = (props) => {
    const {values, setValues} = props;

    const handleChangeValues = (name) => (event) =>  {
        setValues({
            ...values,
            [name]: event.target.value
        })

    } 

    return (
        <div>
            {
                Object.keys(values)?.map((val, index) => {
                    return val ? (
                        <div key={index}>
                            <label htmlFor={val}>{val.charAt(0).toUpperCase() + val.slice(1)}</label>
                            <input type='text' id={val} value={values[val]} onChange={handleChangeValues(val)} />
                        </div>
                    ) : null
                })
                    
            }
        </div>
    )
}


export default FormComponents;