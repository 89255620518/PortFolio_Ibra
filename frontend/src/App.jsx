import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
import Header from './src/component/header/header'
import Footer from './src/component/Footer/Footer'
import HomePage from './src/pages/index';
import AdminPage from './src/pages/adminka';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>

        <Footer
          modalOpen = {modalOpen}
          modalClose = {modalClose}
          isModalOpen={isModalOpen}
        />
      </Router>
    </>
  )
}

export default App
