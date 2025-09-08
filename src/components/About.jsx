
import { Col, Container, Row } from "react-bootstrap";
import aboutImg from "../assets/img/about-bg.jpg"
export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <div className="about-img">
              <img src={aboutImg} alt="About Me" style={{ maxWidth: "80%" }} />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="about-content">
              <h2>About <span class="text-info w-400">Me</span></h2>
              <p>
                Hello! My name is Devraye Parmeshwar, I'm a Full Stack Web Developer with good technical skills in
                HTML5, CSS3, Bootstrap, Javascript, JQuery, React,Core Java, Advanced Java(JSP,Servlet) and Java
                Frameworks (Spring,Springboot,Hibernate).

                My objective as a Full Stack Developer is to grow with the fast-paced environment, where I can
                utilize my expertise in developing web applications and software solutions. I love thinking and
                designing with challenges beyond the existing rules. Thus, I've been so interested in new
                technologies and designs...
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


