import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import TrackVisibility from 'react-on-screen';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ubs6629', 'template_4yr48vl', form.current, '4aSm18pAIy-Dq9zIH')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
          
                <img src={contactImg} alt="Contact Us"/>
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <button type="submit"><span>Send</span></button>
    </form>
    </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
