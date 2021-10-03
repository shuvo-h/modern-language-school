import React from 'react';
import useLoadData from '../../hooks/useLoadData';
import Service from '../Service/Service';

const Home = () => {
    const allServices = useLoadData('/schoolServices.json');
    const serviceLimited = [];
    for(let i = 0; i <= 3; i++){
        serviceLimited.push(allServices[i]);
    }
    return (
        <div className="container mt-4">
            <div>
                <p><u>Show here something related to this website</u></p>
            </div>
            <h1>Our Services</h1>
            <div className="row pt-4">
            {
             serviceLimited.map(service => <Service service={service}  key={service?.srvId}></Service>)
            }
            </div>
        </div>
    );
};

export default Home;