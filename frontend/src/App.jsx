import { useEffect, useState, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
import Header from './src/component/Header/header';
import Footer from './src/component/Footer/footer';
import HomePage from './src/pages/index';
import AdminPage from './src/pages/adminka';
import Guide from './src/component/Guide/guide';
import Konfidi from './src/pages/konfidi';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experiencesRef = useRef(null);
  const projectsRef = useRef(null);
  const customersRef = useRef(null);
  const footerRef = useRef(null);

  const modalOpen = () => {
    document.body.classList.add('no-scroll');
    setIsModalOpen(true);
  }

  const modalClose = () => {
    document.body.classList.remove('no-scroll');
    setIsModalOpen(false);
  }

  return (
    <>  
      <Router>
        <ScrollToTop />
        <Header 
          modalOpen = {modalOpen}
          modalClose = {modalClose}
          isModalOpen={isModalOpen}
          homeRef={homeRef}
          aboutRef={aboutRef}
          experiencesRef={experiencesRef}
          projectsRef={projectsRef}
          customersRef={customersRef}
          footerRef={footerRef}
        />

        <Routes>
          <Route path="/" exact element={<HomePage
            modalOpen = {modalOpen}
            modalClose = {modalClose}
            isModalOpen={isModalOpen}
            homeRef={homeRef}
            aboutRef={aboutRef}
            experiencesRef={experiencesRef}
            projectsRef={projectsRef}
            customersRef={customersRef}
            footerRef={footerRef}
          />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/policy" element={<Konfidi />} />
        </Routes>

        <Guide />

        <Footer
          modalOpen = {modalOpen}
          modalClose = {modalClose}
          isModalOpen={isModalOpen}
          homeRef={homeRef}
          footerRef={footerRef}
        />
      </Router>
    </>
  )
}

export default App
