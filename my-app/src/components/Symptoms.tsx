import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

//  defining the type of the expected properities
export type Symptom = {
    symptom_id: number;
    title: string;
    description: string;
    description_url: string;
  }

  

const Symptoms = () => {
    const [symptoms, setSymptoms] = useState<Symptom [] | null>();
  useEffect(() => {
    const url = 'http://127.0.0.1:5000/symptoms'
    axios.get(url).then((response) => {
      setSymptoms(response.data)            
    })
  },[]);

  const uniqueTitles = [...new Set(symptoms?.map(symptom => symptom.title))]
  return (
    <div> <h3>What Is Bothering You?</h3> 

    {uniqueTitles.map(title => (<li key={title}><Link to={`/symptom/${title.toLowerCase().replace(" ","-")}`}>{title}</Link></li>))}</div>
  )
}

export default Symptoms