import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const About = () => {

  const Abouts = [
    {
      title: "DKM LAW GROUP",
      description: "Design & Development",
      imgUrl: projImg1,
      btn:"github.com",
    },
    {
      title: "SCRAP COLLECTOR",
      description: "Design & Development",
      imgUrl: projImg2,
      btn:"github.com",
    },
    {
      title: "TASTY TIPS",
      description: "Design & Development",
      imgUrl: projImg3,
      btn:"github.com",
    },
    {
      title: "SPEEDY RENTAL",
      description: "Design & Development",
      imgUrl: projImg1,
      btn:"github.com",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <div className={"animate__animated animate__fadeIn"}>
                <h2>About</h2>
                <p>Dive into my digital portfolio! Discover a collection of innovative projects, each a testament to creativity and problem-solving. All projects come with open-source wings on GitHub, inviting you to explore the code, collaborate, and join the journey. Welcome to a world of possibilities – welcome to my Projects Section!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={"animate__animated animate__slideInUp"}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          Abouts.map((project, index) => {
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
