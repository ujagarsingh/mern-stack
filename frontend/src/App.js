import React from 'react';
import './App.css';
import '../src/assets/bootstrap.css'
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import MyNotes from './screens/MyNotes/MyNotes';
import MyProfile from './screens/MyProfile/MyProfile';
import RegisterPage from './screens/Register/RegisterPage';
import LoginPage from './screens/Login/LoginPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/register' element={<RegisterPage />} />
          <Route exact path='/mynotes' element={<MyNotes />} />
          <Route path='/mynote/:id' element={<MyNotes />} />
          <Route path='/myprofile' element={<MyProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
