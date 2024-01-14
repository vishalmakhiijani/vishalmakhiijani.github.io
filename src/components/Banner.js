import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "A Full-Stack Developer.","A Aptech Graduate","A problem solver.","An innovative thinker.","A....","A.... cool guy?","Ok...","Ok...  I am running out of ideas...","Uhh...","Uhh... you can scroll down to see my projects now...","Seriously, my projects are really cool, go check them out!","You are uh...","You are uh... still here?","Ok, this has been fun, but I am gonna restart the loop now...","Or...","Or... I could scroll you by force! Muahaha!","See ya! :)","Nah I am Just Kidding","Or am I......","Okay now I am out of ideas","Restarting the loop"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  const sendtoLinkedin = () =>{
    // Change the URL to the desired external website
    const externalWebsiteUrl = 'https://www.linkedin.com/in/vishalmakhijani/';

    // Use window.open to open the link in a new tab
    window.open(externalWebsiteUrl, '_blank');
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={"animate__animated animate__fadeIn"}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi!👋 I'm Vishal Makhijani`}</h1> 
                <h5><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "A Full-Stack Developer.","A Aptech Graduate","A problem solver.","An innovative thinker.","A....","A.... cool guy?","Ok...","Ok...  I am running out of ideas...","Uhh...","Uhh... you can scroll down to see my projects now...","Seriously, my projects are really cool, go check them out!","You are uh...","You are uh... still here?","Ok, this has been fun, but I am gonna restart the loop now...","Or...","Or... I could scroll you by force! Muahaha!","See ya! :)","Nah I am Just Kidding","Or am I......","Okay now I am out of ideas","Restarting the loop"]'><span className="wrap">{text}</span></span></h5>
                <button onClick={sendtoLinkedin}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={"animate__animated animate__zoomIn"}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
