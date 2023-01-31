import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Symptom } from "./App";


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

    // const getDescriptionUrl = (description: String) => {
    //     if (description === "Gum infections and abscess") {
    //         return <a href="https://www.mouthhealthy.org/all-topics-a-z/abscess">{description}</a>}
    //     if (description === "Red Bleeding Gums"){
    //         return <a href="https://www.mouthhealthy.org/all-topics-a-z/bleeding-gums">{description}</a>
    //     } 
    //     if (description === "Receding Gums"){
    //         return <a href="https://www.mouthhealthy.org/all-topics-a-z/gum-disease">{description}</a>
    //     }
    //     if (description === "Clenching & Grinding"){
    //         return <a href="https://www.mouthhealthy.org/all-topics-a-z/teeth-grinding">{description}</a>
    //     }
    //     if (description === "Hot and Cold Sensitivity"){
    //         return <a href="https://www.mouthhealthy.org/all-topics-a-z/sensitive-teeth">{description}</a>
    //     }   
    //     if (description === "Toothaches"){
    //         return <a href="https://www.mouthhealthy.org/all-topics-a-z/mouth-sores">{description}</a>
    //     } 
    //     if (description === "Cavities"){
    //         return <a href="https://www.mouthhealthy.org/all-topics-a-z/cavities">{description}</a>
    //     } 
    //     if (description === "Loose Adult Teeth"){
    //         return <a href="https://www.mouthhealthy.org/all-topics-a-z/gum-disease">{description}</a>
    //     } 
    //     if (description === "Broken Teeth"){
    //         return <a href="https://www.mouthhealthy.org/all-topics-a-z/braces">{description}</a>
    //     } 
    // };
    return (
    <div className="App">Click on the condition below that most describes your concern
    <ul>
        {symptoms?.map(symptom => (<li key={symptom.symptom_id}>{symptom.description}</li>))}
    </ul>
    </div>)}

export default SymptomDetails;