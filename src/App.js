
import './App.css';
import BottomBody from './BodyComponent/BottomBody';
import Footer from './BodyComponent/Footer';
import MidBody from './BodyComponent/MidBody';
import Topbody from './BodyComponent/Topbody';
import VideoBody from './BodyComponent/VideoBody';
import Header from './Components/Header';
import Hero from './Components/Hero';

function App() {
  return (
    <div className="App">
      {/* <h1 className="bg-orange-300">Ipad</h1> */}
      <Header />
      <Hero />
      <Topbody />
      <VideoBody />
      <MidBody />
      <BottomBody />
      <Footer />
      
    </div>
  );
}

export default App;
