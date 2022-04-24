import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    error: '',
  });

  let navigate = useNavigate();

  const redirect = () => {
    navigate("/")
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prev) => (
      {
        ...prev, [name]: value
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const { username, email, password, password_confirmation } = state
    let user = {
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    };

    axios.post('/users', { user }, { withCredentials: true })
      .then(res => {
        console.log(res.data);
        if (res.data.status === 500) {
          setState({
            error: true,
            username: "",
            email: "",
            password: "",
            password_confirmation: "",
          });
        } else {
          sessionStorage.setItem('userID', res.data.user.id)
          sessionStorage.setItem("username", state.username);
          redirect();
        }
        // if (res.data.status === 'created') {
        //   handleLogin(res.data)
        //   redirect()
        // } else {
        //   setState({
        //     errors: res.data.errors
        //   })
        // }
      })
      .catch(error => console.log('api errors:', error))
  };


  // function handleErrors() {
  //   return (
  //     <div>
  //       <ul>
  //         {state.errors.map((error) => {
  //           return <li> key = {error} &gt; {error} </li>;
  //         })}
  //       </ul>
  //     </div>
  //   );
  // }
  const { username, email, password, password_confirmation } = state
  return (
    <div>
      <h1>Sign Up</h1>
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
        <input
          placeholder="password confirmation"
          type="password"
          name="password_confirmation"
          value={password_confirmation}
          onChange={handleChange}
        />

        <button
          placeholder="submit"
          type="submit"
        >
          Sign Up
        </button>

      </form>
    </div>
  );
}
export default Signup;
