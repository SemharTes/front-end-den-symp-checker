import React, { useState } from 'react'



const NewPatientForm = () => {

    const [formFields, setFormFields] = useState({
        age: '',
        gender: ''
    });

    const onAgeChange = (event: any) => {
        setFormFields({
            ...formFields,
            age: event.target.value
        })
    };

    const onGenderChange = (event: any) => {
        setFormFields({
            ...formFields,
            gender: event.target.value
        })
    };

    return (
        <form>
            <div>
                <label htmlFor="age">Age:</label>
                <input
                    name="age"
                    value={formFields.age} 
                    onChange={onAgeChange}/>
            </div>
            <div>
                <label htmlFor="gender">Sex:</label>
                <input
                    name="gender"
                    value={formFields.gender} 
                    onChange={onGenderChange}/>
            </div>
            <input
                type="submit"
                value="Add Patient" />
        </form>
    );
    
};

// const PatientInfo = () => {
//     const [Age, setAge] = useState("");
//     const [Gender, setGender] = useState("")

//     // onChange event handlers read the current value inside the input field and update the state to that current value
//     const ageHandler = (changeEvent:any) => {
//         setAge(changeEvent.target.value);
//     }
//     const genderHandler = (changeEvent:any) => {
//         setGender(changeEvent.target.value);
//     }

//     return (
//         <section className='patientInfo'>
//             <h2>Identify possible conditions and treatment related to your symptoms.</h2>
//             <div>Age: <input type="text" value={Age} onChange={ageHandler}/></div>
//             <div>Sex: <input type="text" value={Gender} onChange={genderHandler}/></div>
//         </section>

    
    // return (
    // <form className='input'> 
    // <div>
    // <input type='input' placeholder='Age' className="input_box"></input>
    // <button className='input_submit' type='submit'>Submit</button>
    // </div>
    // <div>
    // <input type='input' placeholder='symptom Gender' className="input_box"></input>
    // <button className='input_submit' type='submit'>Submit</button>
    // </div>
    // </form>
// );
// };


export default NewPatientForm;

