import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='container'>
            <div>
                <img src="" alt="" />
                <div>
                    <p>Moon Henry</p>
                    <address>Tehran, Iran</address>
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
            <div className='seconds'>
                <p>10s</p>
                <p id='second'>20s</p>
                <p>30s</p>
                <p>40s</p>
                <p>50s</p>
            </div>
            <div className='exercise'>
                <h5>Exercise Details</h5>
            </div>
        </div>
    );
};

export default Sidebar;