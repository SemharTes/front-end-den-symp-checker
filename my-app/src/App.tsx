import { Link } from 'react-router-dom';
import './App.css';
// import NewPatientForm from './components/PatientInfo';
// import images from './src/images/tooth4'
// import LogIn from './components/LogIn';
// import {symptomTypes} from './components/symptomTypes';




function App ()  {
  
  return (
    <div>   
      <h1 className='intro'>Welcome To Our Dental Symptom Checker!</h1>
      <Link to='/symptoms'>Click here to get started 🦷</Link> <br></br>
      <img alt="external link" src="/images/happylogotooth.jpg" style={{width:"30em", height: "20em"}}/>  
      <Link to='/Login'>Admin LogIn</Link>
      {/* <LogIn/> */}
    </div>
    
    
  );
};

export default App;
