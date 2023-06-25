import React, {useState, useEffect} from 'react';

const InputComponent = (props) => {
    
    const {values, setValues} = props;

    const [tempVals, setTempVals] = useState({
        val1: '',
        val2: ''
    });

    const {val1, val2} = tempVals;

    const handleTempValChange = (name) => (event) => {
        setTempVals({
            ...tempVals,
            [name]: event.target.value
        })
    };

    const addValues = (event) => {
        event.preventDefault();
        setValues({
            ...values,
            [tempVals.val1]: tempVals.val2
        })
        setTempVals({
            val1: '',
            val2: ''
        })
    }

    return (
        <div>
            <input type='text' id={val1} value={val1} onChange={handleTempValChange('val1')} />
            <input type='text' id={val2} value={val2} onChange={handleTempValChange('val2')} />
            <button onClick={addValues}>Add</button>
        </div>
    )
}

export default InputComponent;