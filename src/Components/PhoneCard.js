

import './PhoneCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const PhoneCard = (props) => {
  return (
    <div className="phoneCard">
    <img className='phonepic' src={props.imageUrl} alt="phonepic" />
    <img className='dotpic' src={props.dotUrl} alt="dotpic" />
    <h2 className='text-slate-600 text-xl font-medium'>{props.model}</h2>
    <span >{props.generation}</span>
    <span className='text-slate-600 text-center'>{props.caption}</span>
    <span className='text-slate-600 text-xs font-medium'>{props.startPrice}</span>
    <span className=" text-sky-500 font-medium text-center hover:underline">Learn More<span>
              <FontAwesomeIcon icon={faAngleRight} />
    </span>
    </span>
    <button className='buy text-xs font-medium'>Buy</button>
    <hr  />
    <h3 className='text-slate-600 text-2xl font-medium'>{props.size}</h3>
    <span className='text-slate-600 text-center text-xs font-medium'>{props.display}</span>
    <span className='text-slate-600 text-xs font-medium'>{props.tech}</span>
    <span className='text-slate-600 text-xs font-medium'>{props.mcolor}</span>
    <span className='text-slate-600 text-xs font-medium'>{props.coating}</span>
    <div className="functionDiv">
        <img src={props.chipUrl} alt="chipUrl" />
        <span>{props.chipText}</span>
    </div>
    <div className="functionDiv">
        <img src={props.cameraUrl} alt="" />
        <span>{props.cameraText}</span>
    </div>
    <div className="functionDiv">
        <img src={props.thumbUrl} alt="" />
        <span>{props.thumbText}</span>
    </div>
    <div className="functionDiv">
        <img src={props.usbUrl} alt="" />
        <span>{props.usbText}</span>
    </div>
    <div className="functionDiv">
        <img src={props.fiveGUrl} alt="" />
        <span>{props.fiveGtext}</span>
    </div>
    <div className="functionDiv">
        <img src={props.penUrl} alt="" />
        <span>{props.penText}</span>
    </div>
    <div className="functionDiv">
        <img src={props.keyUrl} alt="" />
        <span>{props.keyText}</span>
    </div>
    <div className="functionDiv">
        <img src={props.mobUrl} alt="mobUrl" />
        <span>{props.mobText}</span>
    </div>
    
    
    </div>
    
  )
}

export default PhoneCard