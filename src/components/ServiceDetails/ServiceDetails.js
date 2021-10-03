import React from 'react';

const ServiceDetails = (props) => {
    const {srvTitle, srvDuration, srvPlaces, srvPrice, srvThumb} = props?.serviceDetails || {};
    
    return (
        <div>
            <h1>{srvTitle}</h1>
            <h4>Course fees: ${srvPrice}</h4>
            <p>Duration: {srvDuration}</p>
            <p>Total students: {srvPlaces}</p>
            <img src={srvThumb} alt="" />
        </div>
    );
};

export default ServiceDetails;
