import React from 'react';

const Video = () => {
  return (
    <div className='information-video'>
      <iframe
        title='information video'
        width="840"
        height="472.5"
        src="https://www.youtube.com/embed/6sPRXFtFZd0"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;