//STEP 1 -- FIND YOU API KEY AND HAVE IT READY TO USE
// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

//STEP 2 -- SETUP STATE, FIRST IMPORT WHAT YOU NEED FOR STATE HOOKS
import React, { useState, useEffect } from "react";

//STEP 3 -- IMPORT AXIOS AND INSTALL AXIOS IF IT IS NOT ALREADY ON THE DEPENDENCY LIST
import axios from 'axios';

//STEP 14 CONT. -- IMPORT OUR APODPHOTO FROM COMPONENTS
import ApodPhoto from './Components/ApodPhoto';

import "./App.css";

//STEP 7 -- DEFINE THE DATA YOU WANT TO USE FROM THE API RESPONSE

//STEP 8 -- I'M DOING THIS SO I CAN USE MY DATA FOR TESTING BECAUSE I COULDN'T BE BOTHERED TO SIGN UP FOR THE API KEY...AND IT'S NOT VERY MUCH DATA.
// const nasaApodData = {
//   copyright: "Tomas Slovinsky",
//   date: "2022-05-18",
//   explanation: "Cloudy skies plagued some sky watchers on Sunday as May's Full Flower Moon slipped through Earth's shadow in a total lunar eclipse. In skies above Chile's Atacama desert this telephoto snapshot still captured an awesome spectacle though. Seen through thin high cirrus clouds just before totality began, a last sliver of sunlit crescent glistens like a hazy jewel atop the mostly shadowed lunar disk. This full moon was near perigee, the closest point in its elliptical orbit. It passed near the center of Earth's dark umbral shadow during the 90 minute long total eclipse phase. Faintly suffused with sunlight scattered by the atmosphere, the umbral shadow itself gave the eclipsed moon a reddened appearance and the very dramatic popular moniker of a Blood Moon.",
//   hdurl: "https://apod.nasa.gov/apod/image/2205/DiamondMoonWSMALL.jpg",
//   title: "A Jewel on the Flower Moon" 
// }

//STEP 9 -- SET STATE 'apodData' TO 'nasaApodData' SO THAT STATE IS TRACKING

//STEP 10 -- SET UP FOLDER FOR COMPONENTS, SET UP FILE FOR THE SPECIFIC COMPONENT WE WANT TO CREATE...NEXT STEP GO TO COMPONENT FILE --> EXIT STAGE LEFT 


function App() {
  //STEP 4 -- SETUP STATE IN THE APP FUNCTION
  const [apodData, setApodData] = useState();

  //STEP 5 + 6 -- CALL 'useEffect' FUNCTION, THEN SETUP AXIOS IN THE FUNCTION REMEMBERING TO CONSOLE.LOG THE DATA FROM THE KEY TO SEE HOW IT IS SETUP.

  //STEP 17 -- REMOVE COMMENT AROUND 'useEffect' SO I CAN USE THE FUNCTION NOW THAT I DON'T NEED TO WORRY ABOUT RUNNING OVER MY API USAGE.

  //STEP 18 -- COMPLETE THE .THEN METHOD TO USE THE DATA WE WANT BY USING THE SETSTATE METHOD ie. 'setApodData'
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        console.log(res);
        setApodData(res.data);
      })
      .catch(err => console.error(err));
  }, [])

  //STEP 15 -- RENDER 'ApodPhoto' IN OUR RETURN OF THE APP FUNCTION

  //STEP 16 -- NOW THAT I CAN SEE THAT MY DATA WORKS LIKE ITS SUPPOSED TO, TIME TO SHORT-CIRCUIT OUR RETURN STATEMENT SO THAT WE CAN RUN THE DATA ONLY WHEN IT'S BEING PASSED TO STATE. NOW JS WILL ONLY RUN IF BOTH SIDES OF THE STATEMENT ARE TRUTHY

  return (
    <div className="App">
     { apodData && <ApodPhoto photo={apodData} /> } 
    </div>
  );
}

export default App;

//STEP 19 -- THE BASE APP IS NOW RENDERING CORRECTLY AND NOW ALL THAT'S LEFT IS STYLING! --> EXIT STAGE ALL

//STEP 20 -- PLAY WITH THE APP AND ADD MORE COMPONENTS MAYBE OR ADD MORE PHOTOS FROM PAST DATES WITH ALL THE INFO...ALOT COULD BE DONE HERE.