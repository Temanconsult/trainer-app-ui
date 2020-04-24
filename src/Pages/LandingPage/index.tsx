import React, {useState} from 'react';
import menuIcon from '../../assets/icons/menu.svg';
import MobileLandingPage from '../../Components/LandingPage/MobileHeader';
import DesktopLangingPage from '../../Components/LandingPage/DesktopHeader';
import Footer from '../../Components/LandingPage/Footer';
import Hero from '../../Components/LandingPage/Hero';
import Courses from '../../Components/LandingPage/Courses';
import AboutUs from '../../Components/LandingPage/AboutUs';
import Instructor from '../../Components/LandingPage/Instructor';

export const LandingPage = () => {
  const [menu, toggleMenu] = useState(false);
  return (
    <div className="landing-page__container">
      <div className="md:hidden">
        <button onClick={() => toggleMenu(!menu)} className="outline-none">
          <img src={menuIcon} alt="menu" className="w-10 h-auto m-4" />
        </button>
        {menu && <MobileLandingPage />}
      </div>
      <DesktopLangingPage />
      <Hero />
      <Courses />
      <AboutUs />
      <Instructor />
      <Footer />
    </div>
  );
};

export default LandingPage;
