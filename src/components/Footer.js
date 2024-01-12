import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/github-mark-white.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/vishalmakhiijani/"><img src={github} alt="Icon" /></a>
            </div>
            <div id="linkedin">
              <a href="#"><img src={linkedin} alt="Icon" /></a>
            </div>
            <p>Copyright© {new Date().getFullYear()}. All Rights Reserved</p>
            <p>Made with ❤️ By <span className="credits"><a href="https://github.com/vishalmakhiijani/">Vishal Makhiijani</a></span></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
