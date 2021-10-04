import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import instituteImg from '../../images/institute.jpg';

const AboutUs = () => {
    return (
        <section className="container my-4">
            <div className='row'>
                <div className='col-7'>
                    <h2>About the Institute</h2>
                    <p>
                        Welcome to <strong>Institute of Modern Language School</strong>, your best choice to learn a language. We're dedicated to giving you the very best service, with a focus on regular practice with our tallented Teachers. <br />
                        This Institute was founded in 2005 by <i>Donald Buchanan</i>, It has come a long way from its beginnings in Bangladesh. When Donald Buchanan first started out, his passion for helping them who want to learn a new language effectively, and gave him the impetus to turn hard work and inspiration into to a teaching institute. We now accept students not only from this country but also international students. <br />
                    
                        We hope you will be benifited from our dervices. If you have any questions or comments, please don't hesitate to contact us. <br /><br />

                        Sincerely, <br />
                        <strong>Donald Buchanan </strong><br />
                        Founder of Institute of Modern Language School, <br /> 
                        Dhaka, Bangladesh
                    </p>
                </div>
                <div className="col-5">
                    <img className='img-fluid' src={instituteImg} alt="" />
                </div>
                    
                <div  className='col-md-6'>
                    <h3>Contact us</h3>
                    <Form>
                        <Form.Group as={Col}  controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control required type="text" placeholder="First name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control required  type="text"  placeholder="Last name"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Write your message here" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out"  />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </div>
            </div>
            
        </section>
    );
};

export default AboutUs;