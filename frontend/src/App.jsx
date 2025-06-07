import { useEffect, useState, useRef } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
import Header from './src/component/header/header';
import Footer from './src/component/Footer/footer';
import HomePage from './src/pages/index';
import AdminPage from './src/pages/adminka';
import Guide from './src/component/guide/guide';
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
        />

        <Routes>
          <Route path="/" exact element={<HomePage
            modalOpen = {modalOpen}
            modalClose = {modalClose}
            isModalOpen={isModalOpen}
            homeRef={homeRef}
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
        />
      </Router>
    </>
  )
}

export default App
