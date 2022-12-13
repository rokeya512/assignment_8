import React from 'react';
import './Service.css';

const Service = (props) => {
    const { picture, name, details, age, time, } = props.service;
    return (
        <div className='service'>
            <img src={picture} alt="" />
            <div className='service-information'>
                <p className='service-name'>{name}</p>
                <p>{details}</p>
                <div>
                    <p>For Age : {age}</p>
                    <p>Time required : {time}s</p>
                </div>
            </div>
            <button className='btn-list'>
                <p className='btn-text'>Add To List</p>
            </button>
        </div>
    );
};

export default Service;