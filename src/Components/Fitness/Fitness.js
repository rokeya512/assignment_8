import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFitness } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Fitness.css';

const Fitness = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    return (
        <div className='container'>
            <FontAwesomeIcon icon={faFitness}></FontAwesomeIcon>
            <h1>FITNESS CLUB</h1>
            <div className='service-container'>
                <div className='card-container'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
                <div className='sidebar'>

                </div>
            </div>
        </div>
    );
};

export default Fitness;