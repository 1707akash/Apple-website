

import './VideoBody.css'
import appVid from '../Assets/FooterImg/appVid.mp4'
import React from 'react'
import { useRef } from 'react'
import moreNatural from '../Assets/FooterImg/lastImg.png'

const VideoBody = () => {
    const videoRef = useRef();
  
    const handlePlay = () => {
        videoRef.current.play();
    }
    const handlePause = () => {
        videoRef.current.pause();
    }


  return (
    <div className='videoBody'>
    
          <div className="videoDiv">
          <video className='video' width="600" height="400" src={appVid} ref={videoRef} autoPlay loop muted></video>
          </div>

          <img className='moreNatural' src={moreNatural} alt="moreNatural" />

        <div className="grid-btn">
        <div className="btn" onClick={handlePlay}>Play</div>
        <div className="btn-pause" onClick={handlePause}>Pause</div>
        </div>
        
    </div>
  )
}

export default VideoBody