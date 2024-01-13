import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { stackList } from "./Extra/ProjectData";
import {
  Technologies,
  Tech,
  TechImg,
  TechName,
} from "./Extra/AboutElements";

export const About = () => {


  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <div className={"animate__animated animate__fadeIn"}>
                <h2>About Me</h2>
                <p>Hello! My name is Vishal Makhijani. I'm from Pakistan. A Aptech Graduate During my time at Aptech Pakistan, I gained valuable experience through various Technologies, which greatly enhanced my work ethic, communication skills, and adaptability.</p>
                <p>My journey into the world of technology began with a strong passion for problem-solving, which led me to pursue the Advanced Diploma In Software Engineering. Despite its challenges, I remained determined and forged lasting friendships that supported me throughout this demanding program. Throughout my studies at Aptech, I had the opportunity to engage in fascinating projects. Notably, I developed DKM Law group website , projects that garnered recognition from my colleagues, instructors, and also made me student of the month.</p>
                <p>Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development and cross-platform mobile development.</p>
                <p>I have become confident using the following technologies</p>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>

      <Technologies>
        {stackList.map((stack, index) => (
          // <ScrollAnimation animateIn="fadeInLeft" key={index}>
          <Tech key={index} className="tech">
            <TechImg src={stack.img} alt={stack.name} />
            <TechName>{stack.name}</TechName>
          </Tech>
          // </ScrollAnimation>
        ))}
      </Technologies>
    </section>
  )
}
