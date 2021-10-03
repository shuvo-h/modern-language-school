import React from 'react';

const ExStudent = (props) => {
    const {name, avater, email, phone, address, year} = props.exStudent || {};
    return (
        <div>
            <h1>{name}</h1>
            <img src={avater} alt="" />
            <p>Passing year: {year}</p>
            <p>Email: {email}</p>
            <p>Contact Number: {phone}</p>
            <p>Contact Address: {address}</p>
        </div>
    );
};

export default ExStudent;