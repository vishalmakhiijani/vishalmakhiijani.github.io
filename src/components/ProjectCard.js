import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, btn }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
       
          <a href={btn} target="_blank" rel="noopener noreferrer">
            <button className="project-btn pbtn">
              <span className="btn-span">Show Project </span>
            </button>
          </a>
       
      </div>
    </Col>
  );
};


