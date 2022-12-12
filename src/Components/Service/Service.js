import React from 'react';
import './Service.css';

const Service = (props) => {
    const { picture, name, age, time, } = props.service;
    return (
        <div className='service'>
            <img src={picture} alt="" />
            <p>{name}</p>
            <p>{age}</p>
        </div>
    );
};

export default Service;