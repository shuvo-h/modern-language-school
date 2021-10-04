import React from 'react';
import './service.css';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const{srvTitle, srvThumb, srvPrice} = props.service || {};
    return (
        <Col>
            <Card>
            <Card.Img className='courseImg' variant="top" src={srvThumb} />
            <Card.Body>
                <Card.Title>{srvTitle}</Card.Title>
                <Card.Text>Course Fees: <strong>${srvPrice}</strong></Card.Text>
            </Card.Body>
            <Card.Footer>
                <Link to="/enroll"><Button>Enroll Now</Button></Link>
            </Card.Footer>
        </Card>
        </Col>
    );
};

export default Service;