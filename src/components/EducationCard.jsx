import React from 'react';

export const EducationCard = ({ title, institution, marks, year, description, imgUrl }) => {
  return (
    <div className="education-card">
      <div className="education-img-container">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="education-content">
        <h3>{title}</h3>
        <h4>{institution}</h4>
        <span className="education-marks">{marks}</span><br></br>
        <span className="education-year">{year}</span>
        <p>{description}</p>
      </div>
    </div>
  )
}