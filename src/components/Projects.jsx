
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.jpg";
import projImg9 from "../assets/img/project-img9.jpg";
import projImg10 from "../assets/img/project-img10.jpg";
import projImg11 from "../assets/img/project-img11.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "HTML/CSS Design",
      description: "Whether you're dreaming of tropical beaches.",
      imgUrl: projImg1,
      editLink: "https://velvety-profiterole-22512d.netlify.app/",
    },
    {
      title: "HTML/CSS Design",
      description: "Welcome to Make Your Dream Home your trusted partner in turning houses into dream.",
      imgUrl: projImg2,
      editLink: "https://frolicking-marigold-2775b5.netlify.app/",
    },
    {
      title: "BOOTSTRAP/CSS Design",
      description: "Indulge the sweetest moments with Delicious Cake freshly baked cake we craft each.",
      imgUrl: projImg3,
      editLink: "https://thriving-queijadas-6576db.netlify.app/",
    },
    {
      title: "BOOTSTRAP/CSS Design",
      description: "Welcome to We Care Your Pets your furry friends receive the love, care, and attension.",
      imgUrl: projImg4,
      editLink: "https://689ac3800335ff1e6a001a88--elaborate-jelly-c36fbf.netlify.app/",
    },
    {
      title: "BOOTSTRAP/CSS Design",
      description: "Welcome to ElectroZone innovation meets performance including smartphone & laptops.",
      imgUrl: projImg5,
      editLink: "https://cerulean-alpaca-24791a.netlify.app/",
    },
    {
      title: "React-Props-Template",
      description: "Experience crystal-clear sound with deep bass in music lovers.",
      imgUrl: projImg6,
      editLink: "https://elegant-gecko-7a4763.netlify.app/",
    },
    {
      title: "React-Routing-Template",
      description: "Our company is dedicated to delivering innovative solutions that empower businesses.",
      imgUrl: projImg7,
      editLink: "https://689980bc50d5878f30e147da--dancing-smakager-82c943.netlify.app/",
    },
    {
      title: "React-Dashboard-Template",
      description: "Built performance scalability user productivity dashboard helps manage data.",
      imgUrl: projImg8,
      editLink: "https://effulgent-panda-95f4bd.netlify.app/",
    },
    {
      title: "Redux-Counter-Template",
      description: "Welcome to the Redux Count Web App, a minimal yet powerful of how Redux efficiently.",
      imgUrl: projImg9,
      editLink: "https://clever-naiad-078646.netlify.app/",
    },
    {
      title: "Redux-Device-Template",
      description: "Welcome to our Laptop, Phone & Watch Store Web App, built using React and Redux Toolkit.",
      imgUrl: projImg10,
      editLink: "https://idyllic-snickerdoodle-1f43a1.netlify.app/",
    },
    {
      title: "Boot/Spring Boot & All Framework Use",
      description: "Java,Servlet,JSP,JDBC,MySQL",
      imgUrl: projImg11,
      editLink: "http://localhost:8081/shopping-cart/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2><span className="text-info w-400">My</span> Projects</h2>
                  <p>
                    As a Full Stack Developer, I have created and deployed a wide range of responsive and dynamic web projects. My frontend projects include creative HTML/CSS designs, interactive Bootstrap websites, and advanced React applications with component-based architecture and state management using Redux. I have developed e-commerce interfaces, admin dashboards, and product listing pages. On the backend, I’ve worked with Java, Spring Boot, Node.js, Express.js, and MongoDB to build secure and scalable APIs, user authentication systems, and database-driven applications. Each project reflects my ability to transform ideas into fully functional digital solutions with clean UI, performance optimization, and strong backend logic.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg" />
    </section>
  );
};




