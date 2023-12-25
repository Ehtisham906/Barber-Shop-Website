// import './App.css';
import image from './images/logo.png'
import './styles/Navbar.css'
import './styles/FirstPage.css'
import './styles/Services.css'
import './styles/ourhistory.css'
import './styles/Contact.css'
import Navbar from "./components/Navbar";
import FirstPage from './components/FirstPage.js';
import OurHistory from './components/OurHistory.js'
import Services from './components/Services.js';
import Contact from './components/Contact.js'

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {
  return (
    <>
    
      <Router>
    <Navbar image={image} FirstPage={FirstPage} />
    


      <Routes>
          <Route excat path='/' element={<FirstPage />} />
          <Route excat path='/ourhistory' element={<OurHistory/>} />
          <Route excat path='/services' element={<Services/>} />
          <Route excat path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
