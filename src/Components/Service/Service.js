import './Service.css';

const Service = ({ service, addToExercisetime }) => {
    const { picture, name, details, age, time } = service;

    return (
        <div className='service'>
            <img src={picture} alt="" />
            <div className='service-information'>
                <p className='service-name'>{name}</p>
                <p>{details}</p>
                <div>
                    <p>For Age : <strong>{age}</strong></p>
                    <p>Time required : <strong>{time}s</strong></p>
                </div>
            </div>
            <button className='btn-list' onClick={() => addToExercisetime(time)}>
                Add To List
            </button>
        </div >
    );
};

export default Service;