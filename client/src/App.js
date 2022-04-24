// import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Home from './components/Home';
import Voice from './components/Voice';
import Login from './components/login';
import Speech from './components/Speech';
import Signup from './components/signup';
import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
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
        <Routes>

          <Route exact path='/' element={<Home />} />

          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />

          <Route exact path='/voice' element={<Voice />} />
          <Route exact path='/speech' element={<Speech />} />

        </Routes>
      </Router>
    </div>
  );
};

export default App;