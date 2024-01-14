import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projDKM from "../assets/img/DKM.png";
import projGYM from "../assets/img/gym.gif";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "DKM LAW GROUP",
      description: "Web application Using PHP used for hiring lawyers Online",
      imgUrl: projDKM,
      btn:"https://github.com/vishalmakhiijani/DKM-Law-group",
    },
    {
      title: "TASTY TIPS",
      description: "Android Application Using Java, Spoonacular API used for searching Recipies",
      imgUrl: projImg3,
      btn:"https://github.com/vishalmakhiijani/food-recipe-android-app",
    },
    {
      title: "SPEEDY RENTAL",
      description: "Web Application Using Django used for renting vehicles",
      imgUrl: projGYM,
      btn:"https://github.com/vishalmakhiijani/Speedy-Rental",
    },{
      title: "GYM MANAGEMENT",
      description: "Web Application using Django (Contributed) Used for Managing GYM.",
      imgUrl: projGYM,
      btn:"https://github.com/vishalmakhiijani/Speedy-Rental",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <div className={"animate__animated animate__fadeIn"}>
                <h2>My Projects</h2>
                <p>Dive into my digital portfolio! Discover a collection of innovative projects, each a testament to creativity and problem-solving. All projects come with open-source wings on GitHub, inviting you to explore the code, collaborate, and join the journey. Welcome to a world of possibilities – welcome to my Projects Section!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={"animate__animated animate__slideInUp"}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
