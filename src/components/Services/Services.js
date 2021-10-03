import React from 'react';
import useLoadData from '../../hooks/useLoadData';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const allServices = useLoadData('/schoolServices.json');
    return (
        <div>
            {
                allServices.map(serviceDetails => <ServiceDetails serviceDetails={serviceDetails} key={serviceDetails.srvId}></ServiceDetails>)
            }
        </div>
    );
};

export default Services;