import React from 'react';

const Service = (props) => {
    const{srvTitle, srvThumb, srvPrice} = props.service || {};
    // console.log(props.service);
    return (
        <div className='col-md-6'>
            <img className="img-fluid" src={srvThumb} alt="" />
            <h2>{srvTitle}</h2>
            <p><strong>${srvPrice}</strong></p>
        </div>
    );
};

export default Service;