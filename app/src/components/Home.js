import React, {useState, useEffect} from 'react';
import {API} from '../config';

const Home = () => {

    const [values, setValues] = useState({
        name: '',
    });


    const {name} = values;
    const handleChange = (name) => (event) =>  {
        setValues({
            ...values,
            [name]: event.target.value
        })

    } 
    const onClick = (event) => {
        event.preventDefault();
        console.log(values);
        fetch(`${API}/create-pdf`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        })
        .then((res) => {
            return res.json();
        })
        .then(data => {
            if(data.error) {
                console.log(data.error);
            }
            else {
                console.log(data);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <div>
            <h1>Home</h1>
            <form> 
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' value={name} onChange={handleChange('name')} />
                <button type='submit' onClick={onClick}>Submit</button>
            </form>
        </div>
    )
}

export default Home;