import { /*useState, useEffect,*/ lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import * as Paths from "src/Paths";

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Membership = lazy(() => import('./pages/Membership/Membership'));
const Events = lazy(() => import('./pages/Events/Events'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Articles = lazy(() => import('./pages/Articles/Articles'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));


const App = () => {
  /*
  const [isLoading, setIsLoading] = useState(false); // TODO: change to true

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  */

  return (<HashRouter>
    {/* {isLoading ? <LoadingScreen /> : <> */}
    <Navbar />
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route exact path={Paths.ROOT} element={<Home />} />
        <Route exact path={Paths.ABOUT} element={<About />} />
        <Route exact path={Paths.MEMBERSHIP} element={<Membership />} />
        <Route exact path={Paths.EVENTS} element={<Events />} />
        <Route exact path={Paths.CONTACT} element={<Contact />} />
        <Route exact path={Paths.ARTICLES} element={<Articles />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
    <Footer />
    {/* </>} */}
  </HashRouter>);
};

export default App;
