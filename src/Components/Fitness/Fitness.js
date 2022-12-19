import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning } from '@fortawesome/free-solid-svg-icons';
import Service from '../Service/Service';
import './Fitness.css';
import Sidebar from '../Sidebar/Sidebar';
import Botton from '../Bottom/Botton';


const Fitness = () => {
    const [services, setService] = useState([]);
    const [exercisetime, setExercisetime] = useState(0);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    const addToExercisetime = (time) => {
        let totalExerciseTime = parseInt(exercisetime) + parseInt(time);
        setExercisetime(totalExerciseTime);
    }
    return (
        <div className='container'>
            <div className='fontawesome-container'>
                <FontAwesomeIcon icon={faRunning} className='fontawesome'></FontAwesomeIcon>
                <h1>FITNESS-CLUB</h1>
            </div>
            <div className='service-container'>
                <div className='card-item'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                            addToExercisetime={addToExercisetime}
                        ></Service>)
                    }
                </div>
                <div className='sidebar'>
                    <Sidebar exercisetime={exercisetime}></Sidebar>
                </div>
            </div>
            <Botton></Botton>
        </div>
    );
};

export default Fitness;