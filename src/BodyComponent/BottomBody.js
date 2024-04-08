import adobe from "../Assets/BottomImages/adobe.png";
import appsFor from "../Assets/BottomImages/appsFor.png";
import birds from "../Assets/BottomImages/birds.png";
import books from "../Assets/BottomImages/books.png";
import colorsketch from "../Assets/BottomImages/colorsketch.png";
import designed from "../Assets/BottomImages/designed.png";
import fantasian from "../Assets/BottomImages/fantasian.png";
import fingerprint from "../Assets/BottomImages/fingerprint.png";
import frndchat from "../Assets/BottomImages/frndchat.jpg";
import gabriela from "../Assets/BottomImages/gabriela.png";
import gamebg from "../Assets/BottomImages/gameBg.png";
import goodnotes from "../Assets/BottomImages/goodnotes.png";
import inviteEdits from "../Assets/BottomImages/inviteEdits.png";
import masterclass from "../Assets/BottomImages/masterclass.png";
import newRelease from "../Assets/BottomImages/newrelease.png";
import privacy from "../Assets/BottomImages/privacy.png";
import reading from "../Assets/BottomImages/reading.png";
import signIn from "../Assets/BottomImages/signIn.png";
import takeAquick from "../Assets/BottomImages/takeAquick.png";
import update from "../Assets/BottomImages/update.jpg";
import useTwoApp from "../Assets/BottomImages/useTwoApp.png";
import widgets from "../Assets/BottomImages/widgets.png";
import widgetOnScr from "../Assets/BottomImages/widgetsOnScr.png";
import "./BottomBody.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const BottomBody = () => {
  return (
    <div className="bottombody">
      <div className="OpSystem">
        <img className="useTwoApp" src={useTwoApp} alt="useTwoApp" />
        <div className="multiTouch">
          <span className="text-2xl font-semibold leading-7">
            Designed for the large Multi‑Touch display, iPadOS is powerful and
            easy to use.
          </span>
          <br />
          <br />
          <span className="text-2xl font-semibold leading-7">
            iPadOS pushes the capabilities of iPad further with more
            discoverable multitasking, new ways to find and organise
            information, and enhanced note‑taking.
          </span>
          <br />
          <br />
          <span className="text-sky-600 text-2xl hover:underline pr-2 leading-7">
            See what’s new in iPadOS{" "}
            <span>
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </span>
        </div>
        <img className="inviteEdits" src={inviteEdits} alt="inviteEdits" />
        <img className="widgets" src={widgets} alt="widgets" />
        <img className="widgetOnScr" src={widgetOnScr} alt="widgetOnScr" />
        <img className="newRelease" src={newRelease} alt="newRelease" />
        <img className="takeAquick" src={takeAquick} alt="takeAquick" />
      </div>

      <div className="appsForEvr">
        <img className="appsFor" src={appsFor} alt="appsFor" />
        <div className="featureDiv">
          <p className="text-xl font-semibold leading-7 text-justify">
            iPad comes with powerful Apple‑designed apps like Photos, Maps,
            Messages, Mail and Safari. And with over a million apps on the App
            Store designed just for iPad, you’ll find the right app for anything
            you want to do. Make a beat, get a workout in or join a battle
            royale with friends.
          </p>
          {/* <br />
          <br /> */}
          <span className="text-sky-600 font-semibold text-xl hover:underline pr-2 leading-7">
            Discover apps for iPad on the App Store
            <span>
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </span>
        </div>
        <img className="gabriela" src={gabriela} alt="gabriela" />
        <img className="masterclass" src={masterclass} alt="masterclass" />
        <img className="colorsketch" src={colorsketch} alt="colorsketch" />
        <img className="adobe" src={adobe} alt="adobe" />
        <img className="gamebg" src={gamebg} alt="gamebg" />
        <img className="fantasian" src={fantasian} alt="fantasian" />
        <img className="reading" src={reading} alt="reading" />
        <img className="books" src={books} alt="books" />
        <img className="birds" src={birds} alt="birds" />
        <img className="goodnotes" src={goodnotes} alt="goodnotes" />
      </div>

      <div className="privacyDiv">
        <img className="signIn" src={signIn} alt="signIn" />
        <img className="update" src={update} alt="update" />
        <img className="fingerprint" src={fingerprint} alt="fingerprint" />
        <img className="privacy" src={privacy} alt="privacy" />
        <div className="privacyDetails">
          <p className="text-xl font-semibold leading-7 text-justify">
            Like every Apple product, iPad was designed with your privacy and
            security in mind. It’s not always easy. But that’s the kind of
            innovation we believe in.
          </p>
          <br />
          <br />
          <span className="text-sky-600 font-semibold  text-xl hover:underline pr-2 leading-7">
            Discover more about our approach to privacy
            <span>
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </span>
        </div>
      </div>

      <div className="designedFor">
        <img className="designed" src={designed} alt="designed" />
        <img className="frndchat" src={frndchat} alt="frndchat" />
        <div className="designDIv">
          <p className="text-2xl font-semibold leading-7 text-justify">
            Technology is most powerful when everyone can use it. That’s why
            iPad comes with accessibility features that support vision, hearing,
            mobility and cognitive needs. Like sign language prominence in
            FaceTime, which can detect when a participant is using sign language
            and make the person prominent in a Group FaceTime call.
          </p>
          <br />
          <span className="text-sky-600 font-semibold  text-xl hover:underline pr-2 leading-7">
            Discover all accessibility features
            <span>
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BottomBody;
