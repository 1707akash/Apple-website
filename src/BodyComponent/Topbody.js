import apparel from "../Assets/BodyImages/apparel.png";
import brightIdeas from "../Assets/BodyImages/brightIdeas.png";
import coaches from "../Assets/BodyImages/coaches.png";
import gameArcade from "../Assets/BodyImages/gameArcade.png";
import paintDraw from "../Assets/BodyImages/paintDraw.png";
import playNew from "../Assets/BodyImages/playNew.png";
import powerThrough from "../Assets/BodyImages/powerThrough.png";
import sketch from "../Assets/BodyImages/sketch.jpg";
import takeNotes from "../Assets/BodyImages/takeNotes.png";
import useMultiple from "../Assets/BodyImages/useMultiple.png";
import watching from "../Assets/BodyImages/watching.png";
import yellowBoard from "../Assets/BodyImages/yellowBoard.jpg";
import Card from "../Components/Card";
// import checkList from "../Assets/Icons/checklist.gif";
import calendar from "../Assets/Icons/calendar.gif";
import clock from "../Assets/Icons/clock.gif";
import user from "../Assets/Icons/user.gif";
import letterA from "../Assets/Icons/letter-a.gif";
import battery from "../Assets/Icons/eco-battery.gif";
import screen from "../Assets/Icons/stretching.gif";
import sun from "../Assets/Icons/sun.gif";
import shootEdit from "../Assets/BodyImages/shootEdit.png"

import "./Topbody.css";

const Topbody = () => {
  return (
    <div className="topbody">
      <div className="apparelDiv">
        <div className="innerApparel">
          <img className="powerThrough" src={powerThrough} alt="powerThrough" />
          <img className="apparel" src={apparel} alt="apparel" />
          <img className="useMultiple" src={useMultiple} alt="useMultiple" />
        </div>
      </div>

      <div className="gameDiv">
        <div className="gameLeft">
          <img className="gameArcade" src={gameArcade} alt="gameArcade" />
          <img src={playNew} alt="playNew" className="playNew" />
        </div>
        <div className="gameRight">
          <Card
            cardIcon={calendar}
            cardText="The A13 Bionic chip makes everything more responsive, from messaging to web browsing to using multiple apps at once."
          />

          <Card
            cardIcon={clock}
            cardText="A fast GPU gives you the graphics performance you need. Perfect for playing immersive games and more."
          />
        </div>
      </div>

      <div className="sketchDiv">
        <div className="leftSketch">
          <Card
            cardIcon={user}
            padding="1rem"
            cardText="A more powerful Neural Engine drives machine learning–based features like Live Text in iPadOS."
          />
          <Card
            cardIcon={letterA}
            padding="1rem"
            cardText="The A13 Bionic chip effortlessly powers advanced apps like Adobe Fresco and Procreate."
          />
          <Card
            cardIcon={battery}
            cardText="With all-day battery life, iPad is ready to work or play for as long as you need it.1"
            padding="1rem"
          />
        </div>
        <div className="rightSketch">
          <img className="sketch" src={sketch} alt="sketch" />
          <img className="paintDraw" src={paintDraw} alt="paintDraw" />
        </div>
      </div>

      <div className="yellowDiv">
        <div className="innerYellow">
          <img className="brightIdeas" src={brightIdeas} alt="brightIdeas" />
          <img className="yellowBoard" src={yellowBoard} alt="yellowBoard" />
          <img className="takeNotes" src={takeNotes} alt="takeNotes" />
        </div>
      </div>

      <div className="coachesDiv">
        <div className="leftCoaches">
          <img className="coaches" src={coaches} alt="coaches" />
          <img className="watching" src={watching} alt="watching" />
        </div>

        <div className="rightCoaches">
          <Card
            cardIcon={screen}
            // padding='1rem'
            cardText="With incredible detail and vivid colours, the
             25.91-centimetre (10.2‑inch) Retina display is perfect for watching movies, working on a project or drawing your next masterpiece."
          />
          <Card
            cardIcon={sun}
            // padding='1rem'
            cardText="True Tone adjusts the display to the colour temperature of the room to make viewing comfortable in any light."
          />
        </div>
      </div>

      <div className="shootEdits">
        <img className="shootEdit" src={shootEdit} alt="shootEdit" />
        <div className="rightShoot">
        <Card
            cardIcon={user}
            // padding='1rem'
            cardText="Centre Stage makes video calls more engaging by automatically adjusting to keep you centred in the frame. And it lets you create fun videos for posting to popular social apps."
          />
        </div>
      </div>


    </div>
  );
};

export default Topbody;
