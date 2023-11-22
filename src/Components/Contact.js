import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import Icon from './Icon';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

      emailjs.sendForm('service_yny9jb7', 'template_qm5k0uw', form.current, 'U86d_f2gu67xF8LmO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <div className="contact" id='contact'>
      <h2>CONTACT US</h2>
      <div className="con-info">
        <div className='col-1'>
          <ul>
            <li><Icon icon="fa-solid fa-phone" style={{color: "blue",}}></Icon></li>
            <li><a href="tel:YOUR_NUMBER">(+91)&nbsp;xxxxx&nbsp;xxxxx</a></li>
          </ul>
        </div>
        <div className="col-2">
          <ul>
            <li><Icon icon="fa-solid fa-location-dot" style={{color: "black",}}></Icon></li>
            <li><a target='_blank' href="https://maps.app.goo.gl/q6oY3An48mza7sna7">3219 Donnelly Plaza, East Kathaleen, CO 56276-7511</a></li>
          </ul>
        </div>
        <div className='col-3'>
          <ul>
            <li><Icon icon='fa-solid fa-envelope' style={{color: "black"}}></Icon></li>
            <li><a href="mailto:YOUR_MAIL">example@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div>
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control name='name' type="name" placeholder="User name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name='mail' type="email" placeholder="E-mail" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control name='number' type="tel" placeholder="Phone number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Time to Contact</Form.Label>
            <Form.Control name='time' type="text" placeholder="Enter the time" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Message" name='message' />
          </Form.Group>

          <Button variant="success" type="submit" >Submit</Button>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
