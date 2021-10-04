import React from 'react';
import './exStudent.css';
const ExStudent = (props) => {
    const {name, avater, email, phone, address, year} = props.exStudent || {};
    return (
        <div className="col-3">
            <div className="mx-1 p-3 shadow">
                <img className="ex-student-img rounded-circle d-block mx-auto" src={avater} alt="" />
                <h4 className="text-center">{name}</h4>
                <p className="m-0">Passing year: {year}</p>
                <p className="m-0">Email: <i>{email}</i></p>
                <p className="m-0">Contact Number: {phone}</p>
                <p className="m-0">Contact Address: {address}</p>
            </div>
        </div>
    );
};

export default ExStudent;