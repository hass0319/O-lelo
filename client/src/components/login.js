import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    errors: ''
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prev) => ({ ...prev, [name]: value }))
  };

  const redirect = () => {
    navigate.push('/')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { username, email, password } = state
    let user = {
      username: username,
      userId: undefined,
      email: email,
      password: password
    }

    axios.post('/login', { user }, { withCredentials: true })
      .then(res => {
        if (res.data.logged_in) {
          sessionStorage.setItem('userID', res.data.user.id);
          sessionStorage.setItem('username', res.data.user.username);

          console.log("logged in");
          redirect();
        } else {
          console.log(res.data.errors[0])
          setState({
            errors: res.data.errors
          })
        }
      })
      .catch(error => console.log('api errors:', error))
  };

  const handleErrors = () => {
    return (
      <div>
        <ul>
          {state.errors.map(error => {
            return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    )
  };

  const { username, email, password } = state
  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <input
          placeholder="email"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button placeholder="submit" type="submit">
          Log In
        </button>
        <div>
          or <Link to='/signup'>sign up</Link>
        </div>

      </form>
    </div>
  );
}
export default Login;