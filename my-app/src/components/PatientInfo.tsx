import React from 'react'

const PatientInfo = () => {
    return (
    <form className='input'> 
    <div>
    <input type='input' placeholder='Age' className="input_box"></input>
    <button className='input_submit' type='submit'>Submit</button>
    </div>
    <div>
    <input type='input' placeholder='symptom duration' className="input_box"></input>
    <button className='input_submit' type='submit'>Submit</button>
    </div>
    </form>
)
};

export default PatientInfo;

