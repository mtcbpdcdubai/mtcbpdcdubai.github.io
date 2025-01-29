// import { /*useState, useEffect,*/ lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import * as Paths from "src/Paths";

import Navbar     from './components/Navbar/Navbar';
import Footer     from './components/Footer/Footer';
import Home       from './pages/Home/Home';
import About      from './pages/About/About';
import Membership from './pages/Membership/Membership';
import Events     from './pages/Events/Events';
// import Contact    from './pages/Contact/Contact';
import Articles   from './pages/Articles/Articles';
import NotFound   from './pages/NotFound/NotFound';


const App = () => {
  return (<HashRouter>
    <Navbar />
    <Routes>
      <Route exact path={Paths.ROOT} element={<Home />} />
      <Route exact path={Paths.ABOUT} element={<About />} />
      <Route exact path={Paths.MEMBERSHIP} element={<Membership />} />
      <Route exact path={Paths.EVENTS} element={<Events />} />
      {/* <Route exact path={Paths.CONTACT} element={<Contact />} /> */}
      <Route exact path={Paths.ARTICLES} element={<Articles />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </HashRouter>);
};

export default App;
