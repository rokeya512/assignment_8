import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import profileImg from '../../images/cartoon.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = ({ exercisetime }) => {
    const [seconds, setSeconds] = useState(0);

    const handleSeconds = (time) => {
        setSeconds(time);
    }

    const toastNotify = () => {
        toast.info("Congratulations!!  Done with your activity!", {
            position: "top-center",
            theme: "colored"
        });
    }
    return (
        <div className='container'>
            <div className='profile-information'>
                <img src={profileImg} alt="" className='profileImg' />
                <div>
                    <h6><strong>Moon Henry</strong></h6>
                    <address className='address'>Dhaka, Bangladesh</address>
                </div>
            </div>
            <div className='about'>
                <div>
                    <h5>65<small>kg</small></h5>
                    <p>Weight</p>
                </div>
                <div>
                    <h5>5.10</h5>
                    <p>Height</p>
                </div>
                <div>
                    <h5>30<small>yrs</small></h5>
                    <p>Age</p>
                </div>
            </div>
            <div>
                <h5>Add A Break</h5>
            </div>
            <div className='seconds' >
                <button onClick={() => handleSeconds(10)}>10s</button>
                <button id='second' onClick={() => handleSeconds(20)}>20s</button>
                <button onClick={() => handleSeconds(30)}>30s</button>
                <button onClick={() => handleSeconds(40)}>40s</button>
                <button onClick={() => handleSeconds(50)}>50s</button>
            </div>
            <div className='exercise'>
                <h5>Exercise Details</h5>
            </div>
            <div className='exercise-time'>
                <h6>Exercise time</h6>
                <p> {exercisetime} seconds</p>
            </div>
            <div className='break-time'>
                <h6>Break time</h6>
                <p>{seconds} seconds</p>
            </div>
            <button className='btn-completed' onClick={toastNotify}>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default Sidebar;