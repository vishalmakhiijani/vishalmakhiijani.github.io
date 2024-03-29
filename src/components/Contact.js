import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Swal from 'sweetalert2'


export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
 
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  };
  
  // Form Validation
  const validateForm = () => {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formDetails.email)) {
      setStatus({ success: false, message: 'Invalid email address' });
      return false;
    }

    // Additional custom validations can be added here

    // If all validations pass
    setStatus({ success: null, message: '' });
    return true;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate the form before submission
    if (!validateForm()) {
      return;
    }
    setButtonText("Sending...");
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true});
      Swal.fire({
        title: 'Success!',
        text:'Message sent successfullyy',
        icon: 'success',
        confirmButtonText: 'OK',
        timer: 3000, // Auto close after 3 seconds
        timerProgressBar: true,
        showClass: {
          popup: `
            animate__animated
            animate__zoomInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__zoomOutDown
            animate__faster
          `
        }
      });
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
      Swal.fire({
        title: 'Something went wrong, please try again later.',
        icon: 'error',
        confirmButtonText: 'OK',
        timer: 3000, // Auto close after 3 seconds
        timerProgressBar: true,
        showClass: {
          popup: `
            animate__animated
            animate__zoomInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__zoomOutDown
            animate__faster
          `
        }
      });
    }
  };



  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              
                <img className={"animate__animated animate__zoomIn"} src={contactImg} alt="Contact Us"/>
              
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              
                <div className={"animate__animated animate__fadeIn"}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} required/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} required ></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
