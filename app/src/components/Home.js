import React, {useState, useEffect} from 'react';
import {API} from '../config';
import FormComponents from './FormComponents';
import InputComponent from './InputComponent';

const Home = () => {

    const [values, setValues] = useState({
        name: '',
        dob: '',
        height: ''
    });

    const [education, setEducation] = useState({
        school: '',
        graduation: '',
        degree: '',
        postGraduation: '',
    });

    const [personal, setPersonal] = useState({
        fatherName: '',
        fatherOccupation: '',
        motherName: '',
        motherOccupation: '',
        maternalGrandfatherName: '',
        maternalGrandfatherOccupation: '',
        paternalGrandfatherName: '',
        paternalGrandfatherOccupation: '',
        maternalUncles: [],
        paternalUncles: [],
        siblings: [],
        values: '',
        residence: '',
        phoneNumbers: []


    });    

    

   
    
    const onClick = (event) => {
        event.preventDefault();
        fetch(`${API}/create-pdf`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                values,
                education,
                personal
            })
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
                <h2>Personal Details</h2>

                    <FormComponents values={values} setValues={setValues} />
                    <InputComponent values={values} setValues={setValues} />

                
                <h2>Education Details</h2>

                    <FormComponents values={education} setValues={setEducation} />
                    <InputComponent values={education} setValues={setEducation} />

                <h2>Family Background</h2>
                
                    <FormComponents values={personal} setValues={setPersonal} />
                    <InputComponent values={personal} setValues={setPersonal} />

                <button type='submit' onClick={onClick}>Submit</button>
            </form>

        </div>
    )
}

export default Home;