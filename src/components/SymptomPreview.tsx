import React from "react";
import { Link } from "react-router-dom";

const SymptomPreview = ({
  link,
  image,
  description,
}: {
  link: string;
  image: string;
  description: string;
}) => {
  const isExternal = link.includes("http");
  return (
    <div className="col">
      <Link to={link}>
        <img
          className="symptomImg"
          src={`/img/${image.toLowerCase().replace(" ", "")}.png`}
          alt=""
        ></img>
        <h2>
          {description}
          {isExternal && (
            <img
              alt=""
              src="/images/external_link_icon.png"
              style={{ width: "0.6em", height: "0.6em" }}
            />
          )}
        </h2>
      </Link>
    </div>
  );
};

export default SymptomPreview;
