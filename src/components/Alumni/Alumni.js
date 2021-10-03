import React from 'react';
import useLoadData from '../../hooks/useLoadData';
import ExStudent from '../ExStudent/ExStudent';

const Alumni = () => {
    const allAlumni = useLoadData('/alumni.json');
    console.log(allAlumni);
    return (
        <div>
            {
                allAlumni.map(exStudent => <ExStudent exStudent={exStudent} key={exStudent.id}></ExStudent> )
            }
        </div>
    );
};

export default Alumni;