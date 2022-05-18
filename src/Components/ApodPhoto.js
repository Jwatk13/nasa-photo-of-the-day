//STEP 11 -- IMPORT REACT AND STATE HOOKS IF NEEDED
import react from 'react';

//STEP 12 -- CREATE OUR COMPONENT FUNCTION FOR JS, AND SET THE DEFAULT EXPORT
//STEP 13 -- SETUP THE ELEMENTS THAT I WANT FOR THIS APP
const ApodPhoto = (props) => {
    return (
        <div className='apod-photo-wrapper'>
            <h2>{props.photo.title}</h2>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} />
            <p>{props.photo.explanation}</p>
            <p>copyright - {props.photo.copyright}</p>
        </div>
    )
}

export default ApodPhoto;

//STEP 14 -- NOW BACK TO THE APP.JS FILE TO IMPORT OUR APODPHOTO SO WE CAN USE IT IN OUR APP --> EXIT STAGE RIGHT
