import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Card.css'


const Card = (props) => {
  useEffect(()=>{
    AOS.init({duration:1000});
  },[])
  return (
    <div data-aos="fade-up" style={{padding: props.padding,
    height: props.height,
    width:props.width
    }} className='card'>
    <img className='cardIcon' src={props.cardIcon} alt={props.cardIcon} />
    <span className='cardText'>{props.cardText}</span>
    </div>
  )
}

export default Card