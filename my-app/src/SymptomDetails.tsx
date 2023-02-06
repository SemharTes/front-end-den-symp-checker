import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Symptom } from "./components/Symptoms";


const SymptomDetails = () => {
    // getting symptomsTitle parameter from reactrouter dom that we specified on the path
    const {symptomTitle}=useParams() // useParams hook allows you to access the parameters of the current url
    const [symptoms, setSymptoms] = useState<Symptom [] | null>();
    useEffect(() => {
        const url = 'http://127.0.0.1:5000/symptoms'
        axios.get(url).then((response) => {
        setSymptoms(response.data.filter((symptom:Symptom) => symptom.title.toLowerCase().replace(' ','-') === symptomTitle))  

        })
    },[symptomTitle]);

    
    return (
    <div>Click on the condition below that most describes your concern. 
    The link will take you to an external website!✨
    <ul>
        {symptoms?.map(symptom => (<li key={symptom.symptom_id}>
        <a href={symptom.description_url}>{symptom.description} <img alt="" src="/images/external_link_icon.jpg" style={{width:"1em"}}/></a></li>))}
    </ul>
    </div>)}

export default SymptomDetails;