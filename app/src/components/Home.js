import React, {useState, useEffect} from 'react';

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