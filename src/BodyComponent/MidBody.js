
import './MidBody.css'
import Card from '../Components/Card'
import facetime from '../Assets/MidImages/faceTime.jpg'
import filesImg from '../Assets/MidImages/filesImg.png'
import flowers from '../Assets/MidImages/flowers.jpg'
import getTo from '../Assets/MidImages/getTo.png'
import goLimitLess from '../Assets/MidImages/goLimitless.png'
import keyBoardPen from '../Assets/MidImages/keybrdPencil.jpg'
import shootedit from '../Assets/MidImages/shootAndEdit.png'
import stayConnected from '../Assets/MidImages/stayConnected.png'
import typeEmail from '../Assets/MidImages/typeEmail.png'
import worksWith from '../Assets/MidImages/worksWith.png'
import writeIt from '../Assets/MidImages/writeIt.png'
import ipadOs from '../Assets/MidImages/ipadOs.png'

import video from '../Assets/Icons/video.gif'
import camera from '../Assets/Icons/camera.gif'
import note from '../Assets/Icons/note.gif'
import downArrow from '../Assets/Icons/down-arrow.gif'
import wifi from '../Assets/Icons/wifi.gif'
import signal from '../Assets/Icons/phone-signal.gif'
import pencil from '../Assets/Icons/edit.gif'
import scenery from '../Assets/Icons/card.gif'
import checklist from '../Assets/Icons/checklist.gif'
import laptop from '../Assets/Icons/laptop.gif'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";



const MidBody = () => {
  return (
    <div className="midBody">
    <div className="flowerDiv">
        <div className="flowerLeft">
        <Card
            cardIcon={video}
            // padding='1rem'
            cardText="In addition to Centre Stage, the 12MP Ultra Wide front camera brings a huge boost in image quality for even better selfies and group shots."
          />
          <Card
            cardIcon={camera}
            // padding='1rem'
            cardText="The 8MP Wide camera on the back of iPad captures sharp, vivid images and video."
          />
          <Card
            cardIcon={note}
            // padding='1rem'
            cardText="The versatile back camera also lets you scan documents and experience immersive AR apps."
          />
        </div>

        <div className="flowerRight">
        <img className='flowers' src={flowers} alt="flowers" />
        <img className='shootedit' src={shootedit} alt="shootedit" />
        </div>
    </div>

    <div className="wireless">
    <div className="innerWireless">
    <img className='goLimitLess' src={goLimitLess} alt="goLimitLess" />
        <img className='facetime' src={facetime} alt="facetime" />
        <img className='stayConnected' src={stayConnected} alt="stayConnected" />
    </div>
        
    </div>


    <div className="filesDiv">
    <div className="filesLeft">
        <Card
            cardIcon={downArrow}
            padding='0rem' height='auto'
            cardText="Download files, stream movies, collaborate with colleagues and upload content from just about anywhere."
          />
          <Card
            cardIcon={wifi}
            padding='0rem' height='auto'
            cardText="Fast Wi‑Fi lets you stay connected at home, work, school or wherever you go with iPad."
          />
          <Card
            cardIcon={signal}
            padding='0rem' height='auto'
            cardText="With 4G LTE Advanced, you can connect even when you can’t access Wi‑Fi.2"
          />
          <span className='text-sky-600 text-2xl md:max-xl:text-xl hover:underline pr-2'>Learn more about cellular <span><FontAwesomeIcon icon={faAngleRight} /></span></span>
        </div>

        <div className="filesRight">
        <img className='filesImg' src={filesImg} alt="filesImg" />
        <img className='getTo' src={getTo} alt="getTo" />
        </div>
       
    </div>


    <div className="writeIt">
        <div className="writeInner">
            <img className='writeItImg' src={writeIt} alt="writeIt" />
            <img className='keyBoardPen' src={keyBoardPen} alt="keyBoardPen" />
            <img className='typeEmail' src={typeEmail} alt="typeEmail" />
            <img className='worksWith' src={worksWith} alt="worksWith" />
        </div>
    </div>


    <div className="features">
        <div className="leftFeature">
        <Card
            cardIcon={pencil}
            padding='0rem' height='auto'
            cardText="Using Apple Pencil is as natural as putting pen to paper, but with capabilities that make handwriting as powerful as typed text.3"
          />
          <Card
            cardIcon={note}
            padding='0rem' height='auto'
            cardText="Take unforgettable notes, create a work of art, mark up screenshots and much more."
          />
          <span className='text-sky-600 text-2xl hover:underline pr-2'>Learn more about Apple Pencil <span><FontAwesomeIcon icon={faAngleRight} /></span></span>
        </div>
        <div className="rightFeature">
        <Card
            cardIcon={scenery}
            padding='0rem' height='auto'
            cardText="Attach a thin and light Smart Keyboard for comfortable typing — perfect for writing your novel or crafting your business plan."
          />
          <Card
            cardIcon={laptop}
            padding='0rem' height='auto'
            cardText="The Smart Keyboard folds up into a slim, lightweight cover for portable protection.3"
          />
          <span className='text-sky-600 text-2xl hover:underline pr-2'>Learn more about the Smart Keyboard <span><FontAwesomeIcon icon={faAngleRight} /></span></span>
        </div>
    </div>


    <div className="ipadOsDiv">
        <img className='ipadOs' src={ipadOs} alt="ipadOs" />
    </div>



    </div>
  )
}

export default MidBody