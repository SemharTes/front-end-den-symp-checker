import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import '../App.css';
import {Gallery} from "react-grid-gallery";
// import path from 'path';
// import img from '../pics/painfulteeth.png'

//  defining the type of the expected properities
export type Symptom = {
    symptom_id: number;
    title: string;
    description: string;
    description_url: string;
}

// const images = [{
//     src: window.location.origin + '/images/painfultooth.jpg',
//     width: 320,
//     height: 174,
//     isSelected: true,
//     caption: "After Rain (Jeshu John - designerspics.com)"

// },]; 

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
   
    <div className='titles_img'>
        
        {/* <img className="your_img" src={window.location.origin + '/pics/tooth1.png'}alt=''/> */}
        {/* <img className="your_img" src={window.location.origin + '/pics/toothgum.png'}alt=''/> */}
        
        <div> <h3>What Is Bothering You?</h3> 
   
         {uniqueTitles.map(title => (<div key={title}><Link to={`/symptom/${title.toLowerCase().replace(" ","-")}`}>{title}</Link></div>))}</div>
    {/* <Gallery images={images} /> */}
    <img className="your_img" src='/pics/painfultooth.png'alt=''/> 
    <img className="your_image" src='/pics/toothgum.png'alt=''/>
    {/* <img className="your_img" src={window.location.origin + '/pics/tooth1.png'}alt=''/> */}
    </div>

    )
};

export default Symptoms