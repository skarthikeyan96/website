import React from 'react';
import ReactPlayer from 'react-player';
import {about} from './content.json';


function About() {
  let videoURL = "https://player.vimeo.com/video/256333276";
  return(
    <div id="about">
      <h1 className="section-heading">About treehacks</h1>
      <div className="container">
        <div><p>{about}</p></div>
        <div><ReactPlayer url={videoURL} width="100%" height="100%" /></div>
      </div>
    </div>
  );
}

export default About;