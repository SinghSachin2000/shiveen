
import './App.css';
import Choose from './components/Choose';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Photos from './components/Photos';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/photos" element={<Photos />}></Route>
          {/* <Route path="/Servises" element={<Servises />}></Route>
          <Route path="/Project" element={<Project />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Parts" element={<Parts />}></Route> */}


        </Routes>
      </Router>


    </>
  );
}

export default App;
