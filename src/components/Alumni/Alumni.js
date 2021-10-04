import React from 'react';
import useLoadData from '../../hooks/useLoadData';
import ExStudent from '../ExStudent/ExStudent';

const Alumni = () => {
    const allAlumni = useLoadData('/alumni.json');
    console.log(allAlumni);
    return (
        <section className="container my-5">
            <div className="row g-4">
                {
                    allAlumni.map(exStudent => <ExStudent exStudent={exStudent} key={exStudent.id}></ExStudent> )
                }
            </div>
        </section>
    );
};

export default Alumni;