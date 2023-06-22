import React, {useState, useEffect} from 'react';
import {API} from '../config';

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


    const {name, dob, height} = values;
    
    const {school, graduation, degree, postGraduation} = education;

    const {fatherName, fatherOccupation, motherName, motherOccupation, maternalGrandfatherName, maternalGrandfatherOccupation, paternalGrandfatherName, paternalGrandfatherOccupation, maternalUncles, paternalUncles, siblings, residence, phoneNumbers} = personal;


    const handleChangeValues = (name) => (event) =>  {
        setValues({
            ...values,
            [name]: event.target.value
        })

    } 

    const handleChangeEducation = (name) => (event) =>  {
        setEducation({
            ...education,
            [name]: event.target.value
        })
    }

    const handleChangePersonal = (name) => (event) =>  {
        setPersonal({
            ...personal,
            [name]: event.target.value
        })
    }


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
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' value={name} onChange={handleChangeValues('name')} />
                </div>

                <div>
                    <label htmlFor='dob'>Date of Birth</label>
                    <input type='date' id='dob' value={dob} onChange={handleChangeValues('dob')} />
                </div>

                <div>
                    <label htmlFor='height'>Height</label>
                    <input type='text' id='height' value={height} onChange={handleChangeValues('height')} />
                </div>

                <div>
                    <label htmlFor='school'>School</label>
                    <input type='text' id='school' value={school} onChange={handleChangeEducation('school')} />
                </div>   

                <div>
                    <label htmlFor='graduation'>Graduation</label>
                    <input type='text' id='graduation' value={graduation} onChange={handleChangeEducation('graduation')} />
                </div>

                <div>
                    <label htmlFor='degree'>Degree</label>
                    <input type='text' id='degree' value={degree} onChange={handleChangeEducation('degree')} />
                </div>

                <div>
                    <label htmlFor='postGraduation'>Post Graduation</label>
                    <input type='text' id='postGraduation' value={postGraduation} onChange={handleChangeEducation('postGraduation')} />
                </div>

                <div>
                    <label htmlFor='fatherName'>Father's Name</label>
                    <input type='text' id='fatherName' value={fatherName} onChange={handleChangePersonal('fatherName')} />
                </div>

                <div>
                    <label htmlFor='fatherOccupation'>Father's Occupation</label>
                    <input type='text' id='fatherOccupation' value={fatherOccupation} onChange={handleChangePersonal('fatherOccupation')} />
                </div>

                <div>
                    <label htmlFor='motherName'>Mother's Name</label>
                    <input type='text' id='motherName' value={motherName} onChange={handleChangePersonal('motherName')} />
                </div>

                <div>
                    <label htmlFor='motherOccupation'>Mother's Occupation</label>
                    <input type='text' id='motherOccupation' value={motherOccupation} onChange={handleChangePersonal('motherOccupation')} />
                </div>

                <div>
                    <label htmlFor='maternalGrandfatherName'>Maternal Grandfather's Name</label>
                    <input type='text' id='maternalGrandfatherName' value={maternalGrandfatherName} onChange={handleChangePersonal('maternalGrandfatherName')} />
                </div>

                <div>
                    <label htmlFor='maternalGrandfatherOccupation'>Maternal Grandfather's Occupation</label>
                    <input type='text' id='maternalGrandfatherOccupation' value={maternalGrandfatherOccupation} onChange={handleChangePersonal('maternalGrandfatherOccupation')} />
                </div>

                <div>
                    <label htmlFor='paternalGrandfatherName'>Paternal Grandfather's Name</label>
                    <input type='text' id='paternalGrandfatherName' value={paternalGrandfatherName} onChange={handleChangePersonal('paternalGrandfatherName')} />
                </div>

                <div>
                    <label htmlFor='paternalGrandfatherOccupation'>Paternal Grandfather's Occupation</label>
                    <input type='text' id='paternalGrandfatherOccupation' value={paternalGrandfatherOccupation} onChange={handleChangePersonal('paternalGrandfatherOccupation')} />
                </div>

                <div>
                    <label htmlFor='maternalUncles'>Maternal Uncles</label>
                    <input type='text' id='maternalUncles' value={maternalUncles} onChange={handleChangePersonal('maternalUncles')} />
                </div>

                <div>
                    <label htmlFor='paternalUncles'>Paternal Uncles</label>
                    <input type='text' id='paternalUncles' value={paternalUncles} onChange={handleChangePersonal('paternalUncles')} />
                </div>

                <div>
                    <label htmlFor='siblings'>Siblings</label>
                    <input type='text' id='siblings' value={siblings} onChange={handleChangePersonal('siblings')} />
                </div>

                <div>
                    <label htmlFor='residence'>Residence</label>
                    <input type='text' id='residence' value={residence} onChange={handleChangePersonal('residence')} />
                </div>

                <div>
                    <label htmlFor='phoneNumbers'>Phone Numbers</label>
                    <input type='text' id='phoneNumbers' value={phoneNumbers} onChange={handleChangePersonal('phoneNumbers')} />
                </div>




                <button type='submit' onClick={onClick}>Submit</button>
            </form>
        </div>
    )
}

export default Home;