import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { EducationCard } from "./EducationCard";
import eduImg1 from "../assets/img/education-img1.jpg";
import eduImg2 from "../assets/img/education-img2.jpg";
import eduImg3 from "../assets/img/education-img3.jpg";
import eduImg4 from "../assets/img/education-img4.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Education = () => {
  const education = [
    {
      title: "Full Stack Developer",
      institution: "Envisional Institute,Pune ",
      marks: "A",
      year: "july - 2025",
      description: "Full Stack Developer skilled in designing and building end-to-end web applications using modern frontend frameworks (React, Angular) and backend technologies (Node.js, Spring Boot) with database integration (MongoDB, MySQL).",
      imgUrl: eduImg1,
    },
    {
      title: "Bachelor of Computer Science",
      institution: "Mgm's Collage Cs And It, Nanded",
      marks: "66.11%",
      year: "May - 2020",
      description: "Bachelor's in Computer Science with a strong foundation in algorithms, data structures, and software engineering. Proficient in full-stack development, cloud computing, and problem-solving for scalable applications.",
      imgUrl: eduImg2,
    },
    {
      title: "Higher Secondary Education",
      institution: "Datta Art & Science Sechondry collage, Hadgao",
      marks: "50.21%",
      year: " June- 2017",
      description: "Completed Higher Secondary Education (Semi-English) with core subjects in Physics, Chemistry, Biology, Sociology, and Hindi. Developed strong analytical skills and scientific temperament through a multidisciplinary science curriculum",
      imgUrl: eduImg3,
    },
    {
      title: "Secondary Education",
      institution: "Khan Abdul Gafar Khan Secondry School,Pathari",
      marks: "59.20%",
      year: "April-2014",
      description: "Completed Secondary Education (Marathi Medium) with subjects including Marathi, Hindi, English, Mathematics, and Environmental Studies. Developed linguistic skills, mathematical reasoning, and environmental awareness through this curriculum.",
      imgUrl: eduImg4,
    }
  ];

  return (
    <section className="education" id="education">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2><span className="text-info w-400">My</span>Education</h2>
                  <p>
                    My educational journey has equipped me with strong technical skills and problem-solving abilities.
                    From foundational programming concepts to advanced software development methodologies,
                    I've consistently pursued knowledge that complements my passion for technology.
                  </p>
                  <Tab.Container id="education-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Degrees</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {education.map((edu, index) => (
                            <EducationCard
                              key={index}
                              {...edu}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Certifications in Full Stack Development, Cloud Computing, and other specialized areas.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Technical skills in various programming languages, frameworks, and tools.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}