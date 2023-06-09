import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Header";
import NavBar from "./NavBar";
import './App.css';
import BookingForm from './BookingPage';
import Home from './Home'
import BookingConfirmationPage from './BookingConfirmationPage'
import Footer from "./Footer";
import AboutSection from "./About";

function App() {
  return (


    <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<BookingForm />} />
        <Route path="/BookingConfirmationPage" element={<BookingConfirmationPage />} />

      </Routes>
      <AboutSection />
      <Footer />
    </Router>

  );
}

export default App;
