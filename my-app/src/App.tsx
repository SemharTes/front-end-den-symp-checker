import { Link } from 'react-router-dom';
import './App.css';
import NewPatientForm from './components/PatientInfo';

import LogIn from './components/LogIn';
// import {symptomTypes} from './components/symptomTypes';




function App ()  {
  
  return (
    <div>  
      <h1 className='intro'>Welcome To Our Dental Symptom Checker!</h1>  
      <LogIn/>
      
<Link to='/symptoms'>Click here to get started 🦷</Link>
    </div>
    
    
  );
};

export default App;
