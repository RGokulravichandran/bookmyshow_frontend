import React from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import AboutMovie from "../../components/AboutMovie/AboutMovie";

const AboutMoviePage = () => {
  const { id } = useParams();

  return (
    <div className="AboutMoviePage">
      <AboutMovie id={id} />
    </div>
  );
};

export default AboutMoviePage;
