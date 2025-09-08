import { Col } from "react-bootstrap";
export const ProjectCard = ({ title, description, imgUrl, editLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {editLink && (
            <a href={editLink} target="_blank" rel="noopener noreferrer">Edit</a>
          )}
        </div>
      </div>
    </Col>
  );
};






