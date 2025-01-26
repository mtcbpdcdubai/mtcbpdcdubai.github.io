import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import * as Paths from "src/Paths";

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Membership from './pages/Membership/Membership';
import Events from './pages/Events/Events';
import Contact from './pages/Contact/Contact';
import Articles from './pages/Articles/Articles';
import NotFound from './pages/NotFound/NotFound';


const App = () => {
  const [isLoading, setIsLoading] = useState(false); // TODO: change to true

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading ? <LoadingScreen /> : <>
        <Navbar />
        <Routes>
          <Route path={Paths.ROOT} element={<Home />} />
          <Route path={Paths.ABOUT} element={<About />} />
          <Route path={Paths.MEMBERSHIP} element={<Membership />} />
          <Route path={Paths.EVENTS} element={<Events />} />
          <Route path={Paths.CONTACT} element={<Contact />} />
          <Route path={Paths.ARTICLES} element={<Articles />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </>}
    </Router>
  );
};

export default App;
