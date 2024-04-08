
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppleAlt,
  faBagShopping,
  faBookmark,
  faBox,
  faLock,
  faPerson,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="topHeader grid">
        <ul className="ullist">
          <li>
            <FontAwesomeIcon icon={faAppleAlt} />
          </li>

          {/* ........store dropdown .......... */}
          <li className="store">
            <span>Store</span>
            <div className="storedrag ">
              <div className="topDiv">
                <div className="storeone">
                  <span className="text-slate-500">Shop</span>
                  <ul className="text-2xl font-semibold text-slate-700">
                    <li>Shop The Latest</li>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>iPhone</li>
                    <li>Apple Watch</li>
                    <li>Accessories</li>
                  </ul>
                </div>
                <div className="storetwo">
                  <span className="text-slate-500">Quick Links</span>
                  <ul className="font-semibold text-slate-700 leading-6">
                    <li>Find a Store</li>
                    <li>Ways to Buy</li>
                    <li>Order Status</li>
                  </ul>
                </div>
                <div className="storethree">
                  <span className="text-slate-500">SHop Special Stores</span>
                  <ul className="font-semibold text-slate-700 leading-6">
                    <li>Education</li>
                    <li>Business</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          {/* ...........Mac dropdown..........  */}
          <li className="mac">
            <span>Mac</span>
            <div className="macDrag">
              <div className="topDiv">
                <div className="storeone">
                  <span className="text-slate-500">Explore Mac</span>
                  <ul className="text-2xl font-semibold text-slate-700">
                    <li>Explore All Mac</li>
                    <li>Macbook Air</li>
                    <li>Macbook Pro</li>
                    <li>iMac</li>
                    <li>Mac Mini</li>
                    <li>Mac Studio</li>
                    <li>Mac Pro</li>
                    <li>Displays</li>
                  </ul>
                  <span className="font-semibold text-slate-500">
                    Compare Mac
                  </span>
                  <br />
                  <span className="font-semibold text-slate-500">
                    Mac Does That
                  </span>
                </div>
                <div className="storetwo">
                  <span className="text-slate-500">Shop Mac</span>
                  <ul className="font-semibold text-slate-600 leading-6">
                    <li>Shop Mac</li>
                    <li>Ways to Buy</li>
                    <li>Accessories</li>
                  </ul>
                </div>
                <div className="storethree">
                  <span className="text-slate-500">More From Mac</span>
                  <ul className="font-semibold text-slate-600 leading-6">
                    <li>Mac Support </li>
                    <li>AppleCare+ for Mac</li>
                    <li>macOS Sonoma</li>
                    <li>Apps By Apple</li>
                    <li>Continuity</li>
                    <li>iCloud+</li>
                    <li>Mac for Business</li>
                    <li>Education</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          {/* ............ipad Dropdwon..........  */}
          <li className="ipadDrop">
            <span>iPad</span>
            <div className="ipadDrag">
              <div className="topDiv">
                <div className="storeone">
                  <span className="text-slate-500">Explore iPad</span>
                  <ul className="text-2xl font-semibold text-slate-700">
                    <li>Explore All iPad</li>
                    <li>iPad Pro</li>
                    <li>iPad Air</li>
                    <li>iPad</li>
                    <li>iPad Mini</li>
                    <li>Apple Pencils</li>
                    <li>Keyboards</li>
                  </ul>
                  <span className="font-semibold text-slate-500">
                    Compare iPad
                  </span>
                  <br />
                  <span className="font-semibold text-slate-500">
                    Why iPad
                  </span>
                </div>
                <div className="storetwo">
                  <span className="text-slate-500">Shop iPad</span>
                  <ul className="font-semibold text-slate-600 leading-6">
                    <li>Shop iPad</li>
                    <li>Ways to Buy</li>
                    <li>iPad Accessories</li>
                  </ul>
                </div>
                <div className="storethree">
                  <span className="text-slate-500">More From Mac</span>
                  <ul className="font-semibold text-slate-600 leading-6">
                    <li>iPad Support </li>
                    <li>AppleCare+ for Mac</li>
                    <li>iPadOS Sonoma</li>
                    <li>Apps By Apple</li>
                    <li>Continuity</li>
                    <li>iCloud+</li>
                    <li>Education</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          {/* .............iphone dropdown..........+  */}
          <li className="iPhone">
            <span>iPhone</span>
            <div className="iphoneDrag">
              <div className="topDiv">
                <div className="storeone">
                  <span className="text-slate-500">Explore iPhone</span>
                  <ul className="text-2xl font-semibold text-slate-700">
                    <li>Explore All iPhone</li>
                    <li>iPhone15 Pro</li>
                    <li>iPhone15</li>
                    <li>iPhone14</li>
                    <li>iPhone13</li>
                    <li>iPhone SE</li>
                  </ul>
                  <span className="font-semibold text-slate-500">
                    Compare iPhone
                  </span>
                  <br />
                  <span className="font-semibold text-slate-500">
                    Switch From Android
                  </span>
                  <br />
                  <span className="font-semibold text-slate-500">
                    Why iPhone
                  </span>
                </div>
                <div className="storetwo">
                  <span className="text-slate-500">Shop iPhone</span>
                  <ul className="font-semibold text-slate-600 leading-6">
                    <li>Shop iPhone</li>
                    <li>Ways to Buy</li>
                    <li>iPhone Accessories</li>
                  </ul>
                </div>
                <div className="storethree">
                  <span className="text-slate-500">More From Mac</span>
                  <ul className="font-semibold text-slate-600 leading-6">
                    <li>iPad Support </li>
                    <li>AppleCare+ for Mac</li>
                    <li>iPadOS Sonoma</li>
                    <li>Apps By Apple</li>
                    <li>Continuity</li>
                    <li>iCloud+</li>
                    <li>Education</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          {/* .............watch dropdown..........+  */}
          <li className="watch">
            <span>Watch</span>
            <div className="watchDrag">
              <div className="topDiv">
                <div className="storeone">
                  <span className="text-slate-500">Explore Watch</span>
                  <ul className="text-2xl font-semibold text-slate-700">
                    <li>Explore All Watch</li>
                    <li>Apple Watch Series9</li>
                    <li>Apple Watch Ultra2</li>
                    <li>Apple Watch SE</li>
                    <li>Apple Watch Nike</li>
                    <li>iPhone SE</li>
                  </ul>
                  <span className="font-semibold text-slate-500">
                    Compare Watch
                  </span>
                  <br />
                  <span className="font-semibold text-slate-500">
                    Why Apple Watch
                  </span>
                </div>
                <div className="storetwo">
                  <span className="text-slate-500">Shop iPhone</span>
                  <ul className="font-semibold text-slate-600 leading-6">
                    <li>Shop Apple Watch</li>
                    <li>Ways to Buy</li>
                    <li>iPhone Accessories</li>
                    <li>Apple Watch Straps</li>
                  </ul>
                </div>
                <div className="storethree">
                  <span className="text-slate-500">More From Mac</span>
                  <ul className="font-semibold text-slate-600 leading-6">
                    <li>Apple Watch Support </li>
                    <li>AppleCare+</li>
                    <li>watchOS 10</li>
                    <li>Apps By Apple</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          {/* .............airpods dropdown..........+  */}
          <li className="airpods">
            <span>AirPods</span>
            <div className="airPodDrag">
              <div className="topDiv">
                <div className="storeone">
                  <span className="text-slate-500">Explore AirPods</span>
                  <ul className="text-2xl font-semibold text-slate-700">
                    <li>Explore AirPods</li>
                    <li>Apple AirPods Series9</li>
                    <li>Apple AirPods Ultra2</li>
                    <li>Apple AirPods</li>
                    <li>Apple AirPods Max</li>
                    <li>Apple AirPods 2nd generation</li>
                  </ul>
                  <span className="font-semibold text-slate-500">
                    Compare AirPods
                  </span>
                  
                </div>
                <div className="storetwo">
                  <span className="text-slate-500">Shop AirPods</span>
                  <ul className="font-semibold text-slate-600 leading-6">
                    <li>Shop AirPods</li>
                    <li>Ways to Buy</li>
                    <li>AirPods Accessories</li>
                  </ul>
                </div>
                <div className="storethree">
                  <span className="text-slate-500">More From AirPods</span>
                  <ul className="font-semibold text-slate-600 leading-6">
                    <li>Apple AirPods Support </li>
                    <li>AppleCare+ for HeadPhones</li>
                    <li>watchOS 10</li>
                    <li>Apple Music</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          {/* .............TV&Home dropdown..........+  */}
          <li className="tvHome">
            <span>TV&Home</span>
            <div className="tvDrag">
              <div className="topDiv">
                <div className="storeone">
                  <span className="text-slate-500">Explore TV & Home</span>
                  <ul className="text-2xl font-semibold text-slate-700">
                    <li>Explore TV & Home</li>
                    <li>Apple TV 4k</li>
                    <li>HomePod</li>
                    <li>HomePod Mini</li>
                  </ul>
                </div>
                <div className="storetwo">
                  <span className="text-slate-500">Shop TV & Home</span>
                  <ul className="font-semibold text-slate-600 leading-6">
                    <li>Shop Apple TV 4k</li>
                    <li>Shop HomePod</li>
                    <li>Shop HomePod Mini</li>
                    <li>Shop Siri Remote</li>
                    <li>TV & Home Accessories</li>
                  </ul>
                </div>
                <div className="storethree">
                  <span className="text-slate-500">More From TV & Home</span>
                  <ul className="font-semibold text-slate-600 leading-6">
                    <li>Apple TV Support </li>
                    <li>AppleCare+</li>
                    <li>HomePod Support</li>
                    <li>Apple TV App</li>
                    <li>Apple TV+</li>
                    <li>Home app</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          {/* .............TV&Home dropdown..........+  */}
          <li className="entertainment">
            <span>Entertainment</span>
            <div className="enterDrop">
              <div className="topDiv">
                <div className="storeone">
                  <span className="text-slate-500">Explore Entertainment</span>
                  <ul className="text-2xl font-semibold text-slate-700">
                    <li>Explore Entertainment</li>
                    <li>Apple One</li>
                    <li>Apple TV+</li>
                    <li>Apple Music</li>
                    <li>Apple Arcade</li>
                    <li>Apple Podcasts</li>
                    <li>Apple Books</li>
                    <li>Apple Store</li>
                  </ul>
                </div>
          
                <div className="storethree">
                  <span className="text-slate-500">Support</span>
                  <ul className="font-semibold text-slate-600 leading-6">
                    <li>Apple TV+ Support </li>
                    <li>Apple Music Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          {/* .............TV&Home dropdown..........+  */}
          <li className="accessories">
            <span>Accessories</span>
            <div className="accessDrop">
              <div className="topDiv">
                <div className="storeone">
                  <span className="text-slate-500">Shop Accessories</span>
                  <ul className="text-2xl font-semibold text-slate-700">
                    <li>Shop All Accessories</li>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>iPhone</li>
                    <li>Apple Watch</li>
                    <li>AirPods</li>
                    <li>TV & Home</li>
                  </ul>
                </div>
          
                <div className="storethree">
                  <span className="text-slate-500">Explore Accessories</span>
                  <ul className="font-semibold text-slate-600 leading-6">
                    <li>Made By Apple</li>
                    <li>Air Tag</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          {/* .............Support dropdown..........+  */}
          <li className="support">
            <span>Support</span>
            <div className="supportDrop">
              <div className="topDiv">
                <div className="storeone">
                  <span className="text-slate-500">Explore Support</span>
                  <ul className="text-2xl font-semibold text-slate-700">
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>iPhone</li>
                    <li>Apple Watch</li>
                    <li>AirPods</li>
                    <li>TV & Home</li>
                    <li>Music</li>
                  </ul>
                  <span className="text-slate-500">Explore Support</span>
                </div>
          
                <div className="storetwo">
                  <span className="text-slate-500">Get Help</span>
                  <ul className="font-semibold text-slate-600 leading-6">
                    <li>Community</li>
                    <li>Check Coverage</li>
                    <li>Repair</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
                <div className="storethree">
                  <span className="text-slate-500">Helpful Topics</span>
                  <ul className="font-semibold text-slate-600 leading-6">
                    <li>Get AppleCare+</li>
                    <li>Apple Id and Password</li>
                    <li>Billing And Subscription</li>
                    <li>Find My</li>
                    <li>Accessibility</li>
                    <li>Education</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <FontAwesomeIcon icon={faSearch} />
          </li>
          <li className="shopping">
            <FontAwesomeIcon icon={faBagShopping} />
            <div className="shoppingDrop">
              <div className="topDiv">
                <div className="storeone">
                <p><span className="underline text-sky-600">Sign In</span> to see if you have any saved Items.</p>
                <h1 className="text-xl font-semibold text-slate-700 my-3">Your Bag is Empty</h1>
                  <span className="text-slate-500 font-semibold">My Profile</span>
                  <ul className="leading-6 font-semibold text-slate-700">
                    <li><FontAwesomeIcon icon={faBox} className="text-slate-400" /> <span className="mx-1">Orders</span></li>
                    <li><FontAwesomeIcon icon={faBookmark} className="text-slate-400" /> <span className="mx-1">Your Saves</span></li>
                    <li><FontAwesomeIcon icon={faLock} className="text-slate-400" /> <span className="mx-1">Account</span></li>
                    <li><FontAwesomeIcon icon={faPerson} className="text-slate-400" /> <span className="mx-1">Sign In</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    
      <div className={`bottomDiv ${isScrolled ? 'scrolled' : ''}`}>
        <div className="bottomHeader">
          <span>iPad</span>
          <div className="btmright">
            <span className="text-slate-400 ">Overview</span>
            <span className="text-slate-600 hover:text-sky-400 transition">
              Why iPad
            </span>
            <span className="text-slate-600 hover:text-sky-400 transition">
              Tech Specs
            </span>
            <button className="mx-4 text-white">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
