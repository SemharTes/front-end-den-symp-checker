import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Symptom } from "./components/Symptoms";
import SymptomPreview from "./components/SymptomPreview";
import { BASE_URL } from "./config";

const SymptomDetails = () => {
  // getting symptomsTitle parameter from reactrouter dom that we specified on the path
  const { symptomTitle } = useParams(); // useParams hook allows you to access the parameters of the current url
  const [symptoms, setSymptoms] = useState<Symptom[]>([]);
  useEffect(() => {
    const url = `${BASE_URL}/symptoms`;
    axios.get(url).then((response) => {
      setSymptoms(
        response.data.filter(
          (symptom: Symptom) =>
            symptom.title.toLowerCase().replace(" ", "-") === symptomTitle
        )
      );
    });
  }, [symptomTitle]);

  function sliceIntoChunks(arr: Symptom[], chunkSize: number) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  }

  const Descriptions = sliceIntoChunks([...symptoms], 2);

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
      {Descriptions.map((titles) => {
        return (
          <>
            <div className="row">
              {titles.map((symptom) => {
                return (
                  <SymptomPreview
                    // key={symptom.symptom_id}
                    link={symptom.description_url}
                    image={symptom.symptom_id.toString()}
                    description={symptom.description}
                  />
                );
              })}
            </div>
            <hr />
            {/* <h5 className="footer">
              &copy;{new Date().getFullYear()} MILCAH | All Rights Reserved |
              Terms Of Service | Privacy
            </h5> */}
          </>
        );
      })}
    </div>
  );
};

export default SymptomDetails;
