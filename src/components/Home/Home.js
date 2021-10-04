import React from 'react';
import { Row } from 'react-bootstrap';
import useLoadData from '../../hooks/useLoadData';
import Service from '../Service/Service';
import './home.css';
import NoticeBoard from './NoticeBoard/NoticeBoard';
import PrincipleMsg from './PrincipleMsg/PrincipleMsg';

const Home = () => {
    const allServices = useLoadData('/schoolServices.json');
    const serviceLimited = allServices.slice(0,4);
    return (
        <section className="mt-4">
            <div className="container">
                {/* message from principle  */}
                <div className="row my-4">
                    <PrincipleMsg></PrincipleMsg>
                    <NoticeBoard></NoticeBoard>
                </div>
            </div>
            <div className="bg-light">
                {/* offered cources  */}
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