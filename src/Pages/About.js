import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Image from 'react-bootstrap/Image';

export const About = () => {


  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <div className={"animate__animated animate__fadeIn"}>
                <h2>About Me</h2>
                <Col xs={6} md={4}>
                        <p><Image src={projImg1}  className="author-image"/></p>
                        </Col>
                <p>Hello! My name is Pedro Muniz. I'm originally from Brazil and have been living in Canada for the past three years. During my time here, I gained valuable experience through various entry-level positions, which greatly enhanced my work ethic, communication skills, and adaptability.</p>
                <p>My journey into the world of technology began with a strong passion for problem-solving, which led me to pursue the Computer Systems Technology program. Despite its challenges, I remained determined and forged lasting friendships that supported me throughout this demanding program. Throughout my studies at BCIT, I had the opportunity to engage in fascinating projects. Notably, I contributed to the development of the RENR Safety App and MyMind, projects that garnered recognition from my colleagues, instructors, and clients alike.</p>
                <p>Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development and cross-platform mobile development.</p>
                <p>I have become confident using the following technologies</p>
                {/* <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={"animate__animated animate__slideInUp"}>
                      <Tab.Pane eventKey="first">
                        <Row>
                        <Col xs={6} md={4}>
                        <Image src={projImg1}  className="author-image"/>
                        </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container> */}
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
