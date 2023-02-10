import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import SymptomPreview from "./SymptomPreview";
import { title } from "process";
// import {Gallery} from "react-grid-gallery";
// import path from 'path';
// import img from '../pics/painfulteeth.png'

//  defining the type of the expected properities
export type Symptom = {
  symptom_id: number;
  title: string;
  description: string;
  description_url: string;
};

// const images = [{
//     src: window.location.origin + '/images/painfultooth.jpg',
//     width: 320,
//     height: 174,
//     isSelected: true,
//     caption: "After Rain (Jeshu John - designerspics.com)"

// },];

const Symptoms = () => {
  function sliceIntoChunks(arr: string[], chunkSize: number) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  }
  const [symptoms, setSymptoms] = useState<Symptom[] | null>();
  useEffect(() => {
    const url = "http://127.0.0.1:5000/symptoms";
    axios.get(url).then((response) => {
      setSymptoms(response.data);
    });
  }, []);

  const uniqueTitles = sliceIntoChunks(
    [...new Set(symptoms?.map((symptom) => symptom.title))],
    2
  );
  // console.log(uniqueTitles);
  return (
    <div className="container">
      {" "}
      {/* <p>
        Here I have listed out the most common dental conditions.<br></br> But
        these are not the only ones.{" "}
      </p> */}
      <h3>
        What Is Bothering You? <br></br>Click on the pictures below that most
        describes your symptom!
      </h3>
      {uniqueTitles.map((titles) => {
        return (
          <>
            <div className="row">
              {titles.map((title) => {
                return (
                  <SymptomPreview
                    link={`/symptom/${title.toLowerCase().replace(" ", "-")}`}
                    image={title}
                    description={title}
                  />
                );
              })}
            </div>
          </>
        );
      })}
      {/* <hr />
      <h5 className="footer">
        &copy;{new Date().getFullYear()} MILCAH | All right reserved | Terms Of
        Service | Privacy
      </h5> */}
    </div>
    // <div className='titles_img'>

    //     <div> <h3>What Is Bothering You?</h3>

    //     {uniqueTitles.map(title => (<div key={title}>
    //         <Link to={`/symptom/${title.toLowerCase().replace(" ","-")}`}>{title}</Link>
    //         </div>))}
    //         </div>
    // <img className="your_img" src='/pics/tooth1.png' alt=''/>
    // <img className="your_img" src='/pics/painfultooth.png'alt=''/>
    // <img className="your_image" src='/pics/toothgum.png'alt=''/>

    // </div>
  );
};

export default Symptoms;
