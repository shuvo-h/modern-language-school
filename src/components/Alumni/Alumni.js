import React from 'react';
import useLoadData from '../../hooks/useLoadData';
import ExStudent from '../ExStudent/ExStudent';

const Alumni = () => {
    const allAlumni = useLoadData('/alumni.json');
    return (
        // EX-student section start 
        <section className="container my-5">
            <h1 className="text-center mb-5">Our Ex-Students</h1>
            <div className="row g-4">
                {
                    allAlumni.map(exStudent => <ExStudent exStudent={exStudent} key={exStudent.id}></ExStudent> )
                }
            </div>
        </section>
    );
};

export default Alumni;