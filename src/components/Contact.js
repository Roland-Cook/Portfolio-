import { useState, useRef} from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs, { send } from '@emailjs/browser';

  

export const Contact = (e) => {
    const [isActive, setIsActive] = useState(false);

    const form = useRef();
    let fname = useRef()
    let lname = useRef()
    let email = useRef()
    let message = useRef()
    let phone = useRef()
  
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_33d63ox', 'template_3d74iub', form.current, '2tH0N6qi7MUym95Uv')
        .then((result) => {
      console.log("Email Sent", result.status);
      fname.current.value = ""
      lname.current.value = ""
      email.current.value = ""
      message.current.value = ""
      phone.current.value = ""
          setIsActive(true);
        }, (error) => {
            console.log(error.text);
        });
    }
  
  
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                <h2 className={`${isActive ? 'hidden-text' : 'not-hidden'}`}>Get In Touch</h2>
                <h2 className={`${isActive ? 'not-hidden' : 'hidden-text'}`}>Message Sent!</h2>
                <form ref={form} onSubmit={sendEmail} >
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name='user_name'  placeholder="First Name" ref={fname}  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="Last Name" ref={lname}
                    />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name='user_email'  placeholder="Email Address" ref={email} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" placeholder="Phone No." ref={phone}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" placeholder="Message" ref={message} name='message' ></textarea>
                      {!isActive && (
                      <button type="submit" ><span>Send</span></button>
                      )}
                      <h2 className={`${isActive ? 'not-hidden' : 'hidden-text'}`}>Thank you!</h2>

                    </Col>

                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
