import ice from "../Assets/FooterImg/ice.png";
import appleLogo from "../Assets/FooterImg/appleLogo.png";
import coverImg from "../Assets/FooterImg/coverImg.jpg";
import slimScrn from "../Assets/FooterImg/slimScrn.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faEquals,
  faIndianRupeeSign,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import PhoneCard from "../Components/PhoneCard";

const Footer = () => {
  const data = [
    {
      imageUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/compare_ipad_pro__c8cwfx6evqgm_large_2x.png",
      dotUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/compare_ipad_pro_swatches__ev9n1tmtg8gi_large_2x.png",
      model: "iPad Pro",
      generation: "",
      caption:
        "The ultimate iPad experience with the most advanced technology.",
      startPrice: "From ₹81900.00*",
      size: "32.77cm",
      display: "(12.9) Liquid Retina XDR display or (11) Liquid Retina display",
      tech: "ProMotion technology",
      mcolor: "P3 wide colour",
      coating: "Anti-reflective coating",
      chipUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_chip_m2__fe9jxfp0b82m_large_2x.png",
      chipText: "M2 chip",
      mobUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_camera_front_portrait__cdrhthe7ycty_large_2x.png",
      mobText: "12MP Ultra Wide front camera",
      cameraUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_camera_dual_lens_1__d6i1ailzbb8m_large_2x.png",
      cameraText: "12MP Wide camera",
      thumbUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_authentication_vertical_touch__bi8qheewjw2u_large_2x.png",
      thumbText: "Touch ID in top button",
      usbUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_connector_thunderbolt_usb_c__dr8q9qvwe1aq_large_2x.png",
      usbText: "USB‑C connector",
      fiveGUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_cellular_5g__eeox2x9lmcae_large_2x.png",
      fiveGtext: "5G capable◊◊",
      penUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_pencil_2ndgen_usbc__gh2usheqq5iu_large_2x.png",
      penText: "Supports Apple Pencil (2nd generation)",
      keyUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_keyboard_magic__edbbyp8uy126_large_2x.png",
      keyText: "Supports Magic Keyboard",
    },
    {
      imageUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/compare_ipad_air__o7xv886z01e2_large_2x.png",
      dotUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/compare_ipad_10_9_swatches__byd83myql22q_large_2x.png",
      model: "iPad Air",
      generation: "",
      caption: "Serious performance in a thin and light design..",
      startPrice: "From ₹39900.00*",
      size: "27.69cm",
      display: "Liquid Retina display",
      tech: "-",
      mcolor: "P3 wide colour",
      coating: "Anti-reflective coating",
      chipUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_chip_m2__fe9jxfp0b82m_large_2x.png",
      chipText: "M2 chip",
      mobUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_camera_front_portrait__cdrhthe7ycty_large_2x.png",
      mobText: "12MP Ultra Wide front camera",
      cameraUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_camera_dual_lens_1__d6i1ailzbb8m_large_2x.png",
      cameraText: "12MP Wide camera",
      thumbUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_authentication_vertical_touch__bi8qheewjw2u_large_2x.png",
      thumbText: "Touch ID in top button",
      usbUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_connector_thunderbolt_usb_c__dr8q9qvwe1aq_large_2x.png",
      usbText: "USB‑C connector",
      fiveGUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_cellular_5g__eeox2x9lmcae_large_2x.png",
      fiveGtext: "5G capable◊◊",
      penUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_pencil_2ndgen_usbc__gh2usheqq5iu_large_2x.png",
      penText: "Supports Apple Pencil (2nd generation)",
      keyUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_keyboard_magic__edbbyp8uy126_large_2x.png",
      keyText: "Supports Magic Keyboard",
    },
    {
      imageUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/compare_ipad_10_9__fnu1ny10hze6_large_2x.png",
      dotUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/compare_ipad_pro_swatches__ev9n1tmtg8gi_large_2x.png",
      model: "iPad",
      generation: "",
      caption:
        "The colourful, all‑screen iPad for the things you do every day.",
      startPrice: "From ₹59900.00*",
      size: "27.89cm",
      display: "Liquid Retina display",
      tech: "-",
      mcolor: "sRGB colour",
      coating: "-",
      chipUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_chip_m2__fe9jxfp0b82m_large_2x.png",
      chipText: "M2 chip",
      mobUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_camera_front_portrait__cdrhthe7ycty_large_2x.png",
      mobText: "12MP Ultra Wide front camera",
      cameraUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_camera_dual_lens_1__d6i1ailzbb8m_large_2x.png",
      cameraText: "12MP Wide camera",
      thumbUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_authentication_vertical_touch__bi8qheewjw2u_large_2x.png",
      thumbText: "Touch ID in top button",
      usbUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_connector_thunderbolt_usb_c__dr8q9qvwe1aq_large_2x.png",
      usbText: "USB‑C connector",
      fiveGUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_cellular_5g__eeox2x9lmcae_large_2x.png",
      fiveGtext: "5G capable◊◊",
      penUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_pencil_2ndgen_usbc__gh2usheqq5iu_large_2x.png",
      penText: "Supports Apple Pencil (2nd generation)",
      keyUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_keyboard_magic__edbbyp8uy126_large_2x.png",
      keyText: "Supports Magic Keyboard",
    },
    {
      imageUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/compare_ipad_10_2__bnhv3wzs1tle_large_2x.png",
      dotUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/compare_ipad_10_9_swatches__byd83myql22q_large_2x.png",
      model: "iPad",
      generation: "",
      caption: "All the essentials in the most affordable iPad.",
      startPrice: "From ₹42900.00*",
      size: "25.91cm",
      display: "Retina display",
      tech: "-",
      mcolor: "sRGB colour",
      coating: "-",
      chipUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_chip_m2__fe9jxfp0b82m_large_2x.png",
      chipText: "M2 chip",
      mobUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_camera_front_portrait__cdrhthe7ycty_large_2x.png",
      mobText: "12MP Ultra Wide front camera",
      cameraUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_camera_dual_lens_1__d6i1ailzbb8m_large_2x.png",
      cameraText: "12MP Wide camera",
      thumbUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_authentication_vertical_touch__bi8qheewjw2u_large_2x.png",
      thumbText: "Touch ID in top button",
      usbUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_connector_thunderbolt_usb_c__dr8q9qvwe1aq_large_2x.png",
      usbText: "USB‑C connector",
      fiveGUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_cellular_5g__eeox2x9lmcae_large_2x.png",
      fiveGtext: "5G capable◊◊",
      penUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_pencil_2ndgen_usbc__gh2usheqq5iu_large_2x.png",
      penText: "Supports Apple Pencil (2nd generation)",
      keyUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_keyboard_magic__edbbyp8uy126_large_2x.png",
      keyText: "Supports Magic Keyboard",
    },
    {
      imageUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/compare_ipad_mini__chf568xn8i1y_large_2x.png",
      dotUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/compare_ipad_pro_swatches__ev9n1tmtg8gi_large_2x.png",
      model: "iPad Mini",
      generation: "",
      caption: "The full iPad experience designed to fit in one hand.",
      startPrice: "From ₹49900.00*",
      size: "21.08cm",
      display: "Liquid Retina display",
      tech: "-",
      mcolor: "P3 wide colour",
      coating: "Anti-reflective coating",
      chipUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_chip_m2__fe9jxfp0b82m_large_2x.png",
      chipText: "M2 chip",
      mobUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_camera_front_portrait__cdrhthe7ycty_large_2x.png",
      mobText: "12MP Ultra Wide front camera",
      cameraUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_camera_dual_lens_1__d6i1ailzbb8m_large_2x.png",
      cameraText: "12MP Wide camera",
      thumbUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_authentication_vertical_touch__bi8qheewjw2u_large_2x.png",
      thumbText: "Touch ID in top button",
      usbUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_connector_thunderbolt_usb_c__dr8q9qvwe1aq_large_2x.png",
      usbText: "USB‑C connector",
      fiveGUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_cellular_5g__eeox2x9lmcae_large_2x.png",
      fiveGtext: "5G capable◊◊",
      penUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_pencil_2ndgen_usbc__gh2usheqq5iu_large_2x.png",
      penText: "Supports Apple Pencil (2nd generation)",
      keyUrl:
        "https://www.apple.com/v/ipad/shared/compare/m/images/overview/icon_keyboard_magic__edbbyp8uy126_large_2x.png",
      keyText: "Supports Magic Keyboard",
    },
  ];

  return (
    <div className="footer">
      <div className="arView">
      {/* md:max-lg:text-xl md:max-lg:leading-5 sm:max-md:text-lg sm:max-md:leading-5 */}
        <img className="ice" src={ice} alt="ice" />
        <img className="slimScrn" src={slimScrn} alt="slimScrn" />
        <div className="arviewText">
          <h1 className="text-5xl md:max-lg:text-3xl md:max-lg:leading-7 sm:max-md:text-2xl sm:max-md:leading-7 font-semibold">
            Use AR to view
            <br />
            iPad.
          </h1>
          <br />
          <span className="text-2xl md:max-lg:text-xl md:max-lg:leading-5 sm:max-md:text-lg sm:max-md:leading-5 ">
            Open this page with Safari on <br />
            your iPhone or iPad.
          </span>
        </div>
      </div>

      <div className="environment">
        <img className="appleLogo" src={appleLogo} alt="appleLogo" />
        <h1 className="text-5xl font-semibold md:max-lg:text-3xl md:max-lg:leading-7 sm:max-md:text-2xl sm:max-md:leading-7 text-green-500 my-2.5 ">
          Environment
        </h1>
        <p className="text-2xl text-center md:max-lg:text-xl md:max-lg:leading-4 sm:max-md:text-base sm:max-md:leading-4 font-medium pb-1">
          Apple is carbon neutral. And by 2030, all of our products will be too.
          We’re committed to one day sourcing 100% recycled and renewable
          materials across our products and packaging, all with clean energy and
          no carbon footprint.
        </p>
        <span className="text-2xl text-sky-500 md:max-lg:text-xl md:max-lg:leading-4 sm:max-md:text-base sm:max-md:leading-4 font-semibold">
          Learn more about Apple and the environment{" "}
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </span>
      </div>

      <div className="accessoryDiv">
        <h1 className="text-5xl font-semibold my-2.5 text-center">
          Accessories that let you
          <br />
          do more with iPad.
        </h1>
        <br />
        <p className="text-xl text-center">
          Explore keyboards, cases, covers, Apple Pencil, AirPods and more.
        </p>
        <br />
        <p className="text-xl text-sky-500 font-semibold hover:underline text-center">
          Shop iPad accessories
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </p>
        <img className="coverImg" src={coverImg} alt="coverImg" />
      </div>

      <div className="chooseIpad">
        {data.map((elem, index) => {
          return (
            <PhoneCard
              key={index}
              imageUrl={elem.imageUrl}
              dotUrl={elem.dotUrl}
              model={elem.model}
              generation={elem.generation}
              caption={elem.caption}
              startPrice={elem.startPrice}
              size={elem.size}
              display={elem.display}
              tech={elem.tech}
              mcolor={elem.mcolor}
              coating={elem.coating}
              chipUrl={elem.chipUrl}
              chipText={elem.chipText}
              cameraUrl={elem.cameraUrl}
              cameraText={elem.cameraText}
              thumbUrl={elem.thumbUrl}
              thumbText={elem.thumbText}
              usbUrl={elem.usbUrl}
              usbText={elem.usbText}
              fiveGUrl={elem.fiveGUrl}
              fiveGtext={elem.fiveGtext}
              penUrl={elem.penUrl}
              penText={elem.penText}
              keyUrl={elem.keyUrl}
              keyText={elem.keyText}
              mobUrl={elem.mobUrl}
              mobText={elem.mobText}
            />
          );
        })}
      </div>

      <div className="footerBottom">
        <div className="topFooter">
          <div className="footFeatures">
            <span>
              <FontAwesomeIcon
                className="text-4xl"
                icon={faTruck}
                style={{ color: "#818488" }}
              />
            </span>
            <h2 className="text-xl font-medium">Free delivery and pickup</h2>
            <span className="text-center">
              Get free delivery or pickup at your Apple Store.
            </span>
            <span className="text-lg text-sky-500 font-medium hover:underline text-center">
              Learn More <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </div>

          <div className="footFeatures">
            <span>
              <FontAwesomeIcon
                className="text-4xl"
                icon={faIndianRupeeSign}
                style={{ color: "#818488" }}
              />
            </span>
            <h2 className="text-xl font-medium">Ways to buy</h2>
            <span className="text-center">
              Choose the way that′s right for you.
            </span>
            <span className="text-lg text-sky-500 font-medium hover:underline text-center">
              Learn More <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </div>

          <div className="footFeatures">
            <span>
              <FontAwesomeIcon
                className="text-4xl"
                icon={faEquals}
                style={{ color: "#818488" }}
              />
            </span>
            <h2 className="text-xl font-medium">Add that personal touch</h2>
            <span className="text-center">
              Engrave a mix of emoji, names, initials and numbers. All for free.
            </span>
            <span className="text-lg text-sky-500 font-medium hover:underline text-center">
              Learn More <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </div>
        </div>
        <hr className="rule" />

        <div className="textOne">
          <p>
            *Listed pricing is Maximum Retail Price (inclusive of all taxes).
            <br />
            ◊The displays have rounded corners. When measured diagonally as a
            rectangle, the iPad Pro 12.9″ screen is 32.77 cm (12.9″), the iPad
            Pro 11″ screen is 27.96 cm (11″), the iPad Air and iPad (10th
            generation) screens are 27.58 cm (10.86″), and the iPad mini screen
            is 21.08 cm (8.3″). Actual viewable area is less.
            <br />
            ◊◊Data plan is
            required. 5G, LTE and Wi-Fi calling are available in selected
            markets and through selected carriers. Speeds are based on
            theoretical throughput and vary based on site conditions and
            carrier. For details on 5G and LTE support, contact your carrier and
            see apple.com/in/ipad/cellular.
            <br />
            ◊◊◊USB-C to Apple Pencil Adapter is
            required to work with iPad (10th generation).
            <br />
            1. Battery life varies by
            use and configuration; see apple.com/in/batteries for more
            information.
            <br />
            2. Data plan is required. 4G LTE Advanced, 4G LTE and
            Wi-Fi calling are available in selected markets and through selected
            carriers. Speeds are based on theoretical throughput and vary based
            on site conditions and carrier. For details on LTE support, contact
            your carrier and see apple.com/in/ipad/cellular.
            <br />
            3. Apple Pencil (1st
            generation) and Smart Keyboard are sold separately.
            <br />
            Apps are
            available on the App Store. Title availability is subject to change.
          </p>
        </div>

        <hr className="rule" />

        <div className="listDivs">
          <div className="one listBottom">
            <ul>
              <li className="font-semibold">Shop And Learn</li>
              <li>Store</li>
              <li>Mac</li>
              <li>ipad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>Airpods</li>
              <li>TV & Home</li>
              <li>AirTag</li>
              <li>Accessories</li>
            </ul>
            <ul>
              <li className="font-semibold">Apple Wallet</li>
              <li> Wallet</li>
            </ul>
          </div>

          <div className="two listBottom">
            <ul>
              <li className="font-semibold">Account</li>
              <li>Store</li>
              <li>Mac</li>
              <li>ipad</li>
            </ul>
            <ul>
              <li className="font-semibold">Entertainment</li>
              <li>Apple Wallet</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>Airpods</li>
              <li>TV & Home</li>
              <li>AirTag</li>
              <li>Accessories</li>
            </ul>
          </div>

          <div className="three listBottom">
            <ul>
              <li className="font-semibold">Apple Store</li>
              <li>Store</li>
              <li>Mac</li>
              <li>ipad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>Airpods</li>
              <li>TV & Home</li>
              <li>AirTag</li>
              <li>Accessories</li>
            </ul>
          </div>

          <div className="four listBottom">
            <ul>
              <li className="font-semibold">For Business</li>
              <li>Store</li>
              <li>Mac</li>
              <li>ipad</li>
            </ul>
            <ul>
              <li className="font-semibold">For education</li>
              <li>Store</li>
              <li>Mac</li>
              <li>ipad</li>
            </ul>
            <ul>
              <li className="font-semibold">For Healthcare</li>
              <li>Apple Wallet</li>
              <li>AirTag</li>
            </ul>
          </div>

          <div className="five listBottom">
            <ul>
              <li className="font-semibold">Apple Values</li>
              <li>Store</li>
              <li>Mac</li>
              <li>ipad</li>
              <li>iPhone</li>
              <li>Watch</li>
            </ul>
            <ul>
              <li className="font-semibold">About Apple</li>
              <li>Apple Wallet</li>
              <li>Airpods</li>
              <li>TV & Home</li>
              <li>AirTag</li>
              <li>Accessories</li>
            </ul>
          </div>



        </div>

        <span className="endSpan">More ways to shop: Find an Apple Store or other retailer near you. Or call 000800 040 1966.</span>

        <hr className="rule" />

        <div className="footEnd">
          <div className="footleft">
            <span>Copyright © 2024 Apple Inc. All rights reserved.</span>
            <span>Privacy Policy | Terms of Use | Sales Policy | Legal | Map</span>
          </div>
          <span>India</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
