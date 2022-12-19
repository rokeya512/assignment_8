import React from 'react';
import './Bottom.css';

const Botton = () => {
    return (
        <div className='bottom'>
            <h4>1. How does react work?</h4>
            <p><strong>Ans:</strong> ReactJS divides the UI into isolated reusable pieces of code known as components. <br /> React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. <br /> It's possible to have as many components as necessary without cluttering your code.</p><br />

            <h4>2. Difference between props and state?</h4>
            <p><strong>Ans:</strong> Props are passed via component properties, they're not reactive. <br /> State are variables that react will react , updating the UI when values changes.</p><br />

            <h4>3. UseEffect use cases?</h4>
            <p><strong>Ans:</strong> (i) Running once on mount: fetch API data.
                (ii) Running on state change: validating input field. <br />
                (iii) Running on state change: live filtering.
                (iv) Running on state change: trigger animation on new array value. <br />
                (v) Running on props change: update paragraph list on fetched API data update.</p>
        </div>
    );
};

export default Botton;