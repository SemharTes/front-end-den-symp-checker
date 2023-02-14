import React, { FormEvent } from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../config";

const AdminPageForm = () => {
  const { symptom_id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [description_url, setDescription_url] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  const navigate = useNavigate();

  const edit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title || !description || !description_url) {
      setShowErrors(true);
      return;
    }

    if (symptom_id !== "new") {
      const url = `${BASE_URL}/symptoms/${symptom_id}`;
      await axios.patch(url, {
        title: title,
        description: description,
        description_url: description_url,
      });
    } else {
      await axios.post(`${BASE_URL}/symptoms`, {
        title: title,
        description: description,
        description_url: description_url,
      });
    }

    navigate("/admin");
  };
  useEffect(() => {
    if (!symptom_id || symptom_id === "new") {
      return;
    }
    const url = `${BASE_URL}/symptoms/${symptom_id}`;
    axios.get(url).then((response) => {
      setTitle(response.data.title);
      setDescription(response.data.description);
      setDescription_url(response.data.description_url);
    });
  }, [symptom_id]);

  return (
    <>
      <h1>
        {symptom_id === "new"
          ? "Add new symptom or Edit an existing one!"
          : "MAKE CHANGES!"}
      </h1>
      <form className="labels" onSubmit={edit}>
        <label htmlFor="">
          Title
          <input
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
          {!title && showErrors && <p>Title is required</p>}
        </label>
        <label htmlFor="">
          Description
          <input
            value={description}
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
          {!description && showErrors && <p>Description is required</p>}
        </label>
        <label htmlFor="">
          Description_url
          <input
            value={description_url}
            type="text"
            onChange={(e) => setDescription_url(e.target.value)}
          />
          {!description_url && showErrors && <p>URL is required</p>}
        </label>
        <button type="submit">Submit</button>
      </form>
      {/* <hr />
      <h5 className="footer">
        &copy;{new Date().getFullYear()} MILCAH | All RightS Reserved | Terms Of
        Service | Privacy
      </h5> */}
    </>
  );
};

export default AdminPageForm;
