import { Link } from "react-router-dom";
import "./App.css";
// import NewPatientForm from './components/PatientInfo';
// import images from './src/images/tooth4'
// import LogIn from './components/LogIn';
// import {symptomTypes} from './components/symptomTypes';

function App() {
  return (
    <div>
      <h1 className="intro">Welcome To Our Dental Symptom Checker!</h1>
      <h4>
        When dental problems pop up, don't you wish you could just ask a dentist
        about it? <br></br>Whenever my family has dental questions, they pick up
        the phone and call me: What is this?<br></br> Why does it hurt? How do I
        fix it? Do I need an x-ray? Do I need to go see a dentist rightaway?
        <br></br>Unfortunately, most people have to actually GO to a dentists
        office to ask a dentist. <br></br>I created this Dental Symptom Checker
        so that anyone, anywhere can “get an answer <br></br>to their questions“
        for FREE. You will find answers to tons of questions about a wide{" "}
        <br></br>
        variety of dental symptoms. Whether you are here in the DMV area or in
        Antarctica, <br></br>I hope that this dental symptom checker helps you
        to get an idea of what your <br></br>symptom might be and get the
        answers you need to be healthier!
      </h4>
      <Link to="/symptoms">Click here to get started 🦷</Link> <br></br>
      <img
        alt="external link"
        src="/img/homepage pic.jpg"
        style={{ width: "50em", height: "40em" }}
      />
      <Link to="/Login">Admin LogIn</Link>
      {/* <LogIn/> */}
    </div>
  );
}

export default App;
