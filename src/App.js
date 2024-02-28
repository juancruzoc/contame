import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoggedNavbar from './components/navbar/loggedNavbar.js';
import GuestNavbar from './components/navbar/guestNavbar.js';
import LoginForm from './components/user/loginForm.js';
import SignUpForm from './components/user/signupForm.js';
import Footer from './components/footer/footer.js';
import Cookies from 'js-cookie';

const Home = () => <h1>Home</h1>;
const MyJournals = () => <h1>Journals</h1>;
const Reports = () => <h1>Reports</h1>;

const App = () => {
  const hasSessionCookie = () => {
    // Check if the session cookie exists (you may need to adjust this logic based on your actual cookie setup)

    return Cookies.get('Authorization') ? true : false
  };

  return (
    <Router>
      <div className="flex flex-col h-screen justify-between">
        {hasSessionCookie() ? (
          <LoggedNavbar />
        ) : (
          <GuestNavbar />
        )}
        <div className="container mx-auto">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/my-journals" element={<MyJournals />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signup" element={<SignUpForm />} />
            </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;