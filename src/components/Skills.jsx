import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h1><span className="text-info w-400">My</span>Skills</h1>
              <p>As a passionate Full Stack Developer, I possess strong expertise in both frontend and backend technologies. On the frontend, I specialize in HTML5, CSS3, JavaScript, React.js, and Bootstrap to build responsive and user-friendly interfaces. On the backend, I work with Java, Servlets, JDBC, and MySQL to create secure and scalable systems. I am also familiar with Git, GitHub, RESTful APIs, and version control systems. My ability to handle both client-side and server-side development enables me to build complete web solutions from scratch. I’m always eager to learn new technologies and improve my coding standards.</p>
              <h2>Front End Developer</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>JAVASCRIPT</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>REACT</h5>
                </div>
              </Carousel>
            </div>
            <div className="skill-bx wow zoomIn">
              <h2>Back End Developer</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Core java</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>MySQl</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Advance Java</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>HIBERANTE FRAMEWORK</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>SPRING FRAMEWORK</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>SPRING BOOT FRAMEWORK</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
