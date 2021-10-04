import React from 'react';
import { CardGroup, Row } from 'react-bootstrap';
import useLoadData from '../../hooks/useLoadData';
import Service from '../Service/Service';
import './home.css';

const Home = () => {
    const allServices = useLoadData('/schoolServices.json');
    const serviceLimited = [];
    for(let i = 0; i <= 3; i++){
        serviceLimited.push(allServices[i]);
    }
    return (
        <section className="mt-4">
            <div className="container">
                <div className="my-4">
                    <h1>PRINCIPAL’S MESSAGE</h1>
                    <img className="principal-img ms-2" src="https://www.rudymeyers.com/koken/storage/cache/images/000/506/web-HI-RES-Final-MG-5804-William-Graves,medium.2x.1464141973.jpg" alt="" />
                    <p className="ms-3">
                    Welcome to Institute of Modern Language School. I am honoured to serve as the principal of the Institute of Modern Language School. <br />
                    I am pleased to let you know that we have updated our course to fit with the language of modern world. Our all teachers are always co-operative with each students. <br />
                    Qualityful service is our first priority. We ensure all resources related to our course curriculumn at our library. <br /> 
                    As you begin the next step of your life journey, you will find that our entire Institute is here to support your academic, social, and personal growth. <br />
                    We wish our students a fulfilling journey ahead in their language learning endeavour. <br />
                    I invite you to join us, as a prospective student, parent, or friend. <br /> <br />

                    Respectfully, <br />
                    <strong>Joshua Anderson</strong> <br />
                    Principal
                    </p>
                    
                </div>
            </div>
            <div className="bg-light">
                <div className=" container mt-4 py-4">
                    <h1>Our Services</h1>
                    <Row xs={1} md={2} lg={4} className="g-4">
                    {
                    serviceLimited.map(service => <Service service={service}  key={service?.srvId}></Service>)
                    }
                    </Row>
                </div>
            </div>
        </section>
    );
};

export default Home;