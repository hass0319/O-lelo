// import logo from './logo.svg';
import './App.scss';
import Home from './components/Home';
import Text from './components/Text';
import Login from './components/login';
import Speech from './components/Speech';
import Signup from './components/Signup';
import About from './components/About';
import Account from './components/Account';
import Navbar from './components/Navbar';

import axios from 'axios'
import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";


export default function App() {
  const [state, setState] = useState({
    isLoggedIn: false,
    user: {}
  });

  useEffect(() => {
    const loginStatus = () => {
      axios.get('/logged_in',
        { withCredentials: true })
        .then(res => {
          if (res.data.logged_in) {
            handleLogin(res)
          } else {
            handleLogout()
          }
        })
        .catch(error => console.log('api errors:', error))
    };
  }, []);

  const handleLogin = (data) => {
    setState({
      isLoggedIn: true,
      user: data.user
    });
  }

  const handleLogout = () => {
    setState({
      isLoggedIn: false,
      user: {}
    });
  }

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>

          <Route exact path='/' element={<Home />} />

          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />

          <Route exact path='/voice' element={<Speech />} />
          <Route exact path='/speech' element={<Text />} />

          <Route exact path='/about' element={<About />} />
          <Route exact path='/account' element={<Account />} />

        </Routes>
      </Router>
    </div>
  );
};
