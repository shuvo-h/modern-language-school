import React from 'react';
import { Table } from 'react-bootstrap';
import useLoadData from '../../hooks/useLoadData';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const allServices = useLoadData('/schoolServices.json');
    return (
        // course details 
        <section className="container my-5">
            <h3 className="text-center text-success">Our Service Total {allServices.length} Courses</h3>
            <Table striped bordered hover size="sm" className="text-center">
                <thead>
                    <tr>
                    <th className="p-3">Course Banner</th>
                    <th className="p-3">Course Name</th>
                    <th className="p-3">Course Fees</th>
                    <th className="p-3">Total Seat</th>
                    <th className="p-3">Course Duration</th>
                    <th className="p-3">Enroll Now</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allServices.map(serviceDetails => <ServiceDetails serviceDetails={serviceDetails} key={serviceDetails.srvId}></ServiceDetails>)
                    }
                    
                </tbody>
            </Table>
        </section>
    );
};

export default Services;