import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Symptom } from "./App";


const SymptomDetails = () => {
    const {symptomTitle}=useParams()
    const [symptoms, setSymptoms] = useState<Symptom [] | null>();
  useEffect(() => {
    const url = 'http://127.0.0.1:5000/symptoms'
    axios.get(url).then((response) => {
      setSymptoms(response.data.filter((symptom:Symptom) => symptom.title.toLowerCase().replace(' ','-') === symptomTitle))  

    })
  },[symptomTitle]);

    return (<div className="App">Click on the condition below that most describes your concern
    <ul>
        {symptoms?.map(symptom => (<li key={symptom.symptom_id}>{symptom.description}</li>))}
    </ul>
    </div>)}

export default SymptomDetails;