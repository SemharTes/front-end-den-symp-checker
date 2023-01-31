import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import NewPatientForm from './components/PatientInfo';
import { Link } from 'react-router-dom';
// import LogIn from './components/logIn';
// import {symptomTypes} from './components/symptomTypes';

//  defining the type of the expected properities
export type Symptom = {
  symptom_id: number;
  title: string;
  description: string;
  description_url: string;
}


function App ()  {
  const [symptoms, setSymptoms] = useState<Symptom [] | null>();
  useEffect(() => {
    const url = 'http://127.0.0.1:5000/symptoms'
    axios.get(url).then((response) => {
      setSymptoms(response.data)            
    })
  },[]);

  const uniqueTitles = [...new Set(symptoms?.map(symptom => symptom.title))]
  return (
    <div className="App">  
      <span className="heading">WebDen Symptom Checker</span>
      <NewPatientForm/>
      <h1 className='intro'>Welcome To Our Dental Symptom Checker!</h1>  
      <h3>What Is Bothering You?</h3> 

      {uniqueTitles.map(title => (<li key={title}><Link to={`/symptom/${title.toLowerCase().replace(" ","-")}`}>{title}</Link></li>))}
      {/* {symptoms ? symptoms.map((symptom ) => {
      return <li key={symptom.symptom_id}>{symptom.title}</li>
    }) : null}  */}
    </div>
    
    
  );
};

export default App;
