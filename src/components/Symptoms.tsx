// import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import SymptomPreview from "./SymptomPreview";
import { BASE_URL } from "../config";

//  defining the type of the expected properities
export type Symptom = {
  symptom_id: number;
  title: string;
  description: string;
  description_url: string;
};

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
    const url = `${BASE_URL}/symptoms`;
    axios.get(url).then((response) => {
      setSymptoms(response.data);
    });
  }, []);

  const uniqueTitles = sliceIntoChunks(
    [...new Set(symptoms?.map((symptom) => symptom.title))],
    3
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
            <div className="row" key={titles.join(",")}>
              {titles.map((title) => {
                return (
                  <SymptomPreview
                    key={title}
                    link={`/symptom/${title.toLowerCase().replace(" ", "-")}`}
                    image={title}
                    description={title}
                  />
                );
              })}
            </div>
            <hr />
          </>
        );
      })}
    </div>
  );
};

export default Symptoms;
