import React from 'react';
import { Button } from 'react-bootstrap';
import './serviceDetails.css';

const ServiceDetails = (props) => {
    const {srvTitle, srvDuration, srvPlaces, srvPrice, srvThumb} = props?.serviceDetails || {};
    
    return (
        // service details
        <tr>
            <td><img className="table-img" src={srvThumb} alt="" /></td>
            <td>{srvTitle}</td>
            <td>${srvPrice}</td>
            <td>{srvPlaces}</td>
            <td>{srvDuration} years</td>
            <td><Button>Apply</Button></td>
        </tr>
    );
};

export default ServiceDetails;
