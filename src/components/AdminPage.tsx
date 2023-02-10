import React, { useEffect, useState } from "react";
import axios from "axios";
import { Symptom } from "./Symptoms";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AdminPage = () => {
  const [symptoms, setSymptoms] = useState<Symptom[]>([]);
  useEffect(() => {
    const url = "http://127.0.0.1:5000/symptoms";
    axios.get(url).then((response) => {
      setSymptoms(response.data);
    });
  }, []);

  const onDelete = async (symptom_id: number) => {
    await axios.delete(`http://127.0.0.1:5000/symptoms/${symptom_id}`);
    toast.success("Wow deleted, so easy!");

    axios.get("http://127.0.0.1:5000/symptoms").then((response) => {
      setSymptoms(response.data);
    });
  };

  return (
    <>
      <div className="adminPage">Welcome to the admin page!👩🏾‍💼🖥</div>
      <ul className="column">
        {symptoms.map((symptom) => (
          <li key={symptom.symptom_id}>
            <Link to={`/admin/${symptom.symptom_id}`}>
              {symptom.title} - {symptom.description}
            </Link>
            <button
              className="deleteButton"
              onClick={() => onDelete(symptom.symptom_id)}
            >
              Delete
            </button>
          </li>
        ))}
        {/* <section className='symptomScroll'></section> */}
      </ul>
      <Link to="/">Home</Link> <br></br>
      <Link to="/admin/new">Add Symptoms</Link>
      {/* <hr />
      <h5 className="footer">
        &copy;{new Date().getFullYear()} MILCAH | All right reserved | Terms Of
        Service | Privacy
      </h5> */}
    </>
  );
};

export default AdminPage;
