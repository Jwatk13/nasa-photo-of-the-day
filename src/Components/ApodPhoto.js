//STEP 11 -- IMPORT REACT AND STATE HOOKS IF NEEDED
import react from 'react';
import styled, { keyframes } from 'styled-components';


const StyledApod = styled.div`
    background: linear-gradient(darkblue, darkred);
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    
    h2 {
        color: ${props => props.theme.white};
        padding: 2px;
        border-bottom: dotted white 5px;
    }

    p {
        color: ${props => props.theme.white};
    }

    .date {
        font-weight: 600;
    }
    
    img {
      max-width: 65%;
      border: double white 10px;
      border-radius: 8px;
    }
    
    .copyright {
        color: ${props => props.theme.white};
        font-size: small;
        border-bottom: solid black 4px;
        display: flex;
        justify-content: center;
        padding-bottom: 8px;
    }

    .explanation {
        padding: 4em;
        border-top: solid black 2px;
        border-bottom: solid black 2px;
    }
`

//STEP 12 -- CREATE OUR COMPONENT FUNCTION FOR JS, AND SET THE DEFAULT EXPORT
//STEP 13 -- SETUP THE ELEMENTS THAT I WANT FOR THIS APP
const ApodPhoto = (props) => {
    return (
        <StyledApod className='apod-photo-wrapper'>
            <h2>{props.photo.title}</h2>
            <p className='date'>{props.photo.date}</p>
            <img src={props.photo.hdurl} />
            <p className='explanation'>{props.photo.explanation}</p>
            <p className='copyright'>copyright - {props.photo.copyright}</p>
        </StyledApod>
    )
}

export default ApodPhoto;

//STEP 14 -- NOW BACK TO THE APP.JS FILE TO IMPORT OUR APODPHOTO SO WE CAN USE IT IN OUR APP --> EXIT STAGE RIGHT
