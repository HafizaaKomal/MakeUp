import { Link } from 'react-router-dom';
import { route } from "../../constants";
import { Navbar, Footer } from "../../components/common/index";
import React, {  useState } from "react";
import { AuthContext } from "../Context/AuthContext";




function Login() {
  const { login } = AuthContext;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    const user = {
      email,
      password,
    };

    login(user);
  };

  return (
    <loginWrapper>
    <div className="login-container"> {/* Add container class */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="login-input"
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />

        {error && <p>{error}</p>}

        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
    </loginWrapper>
  );
}

export default Login;

// const loginWrapper = styled.div`
//   .login-container {
//   border: 1px solid #ccc;
//   padding: 20px;
//   width: 300px;
//   margin: 0 auto;
// }

// .login-input {
//   margin-bottom: 10px;
//   width: 100%;
//   padding: 8px;
// }

// .login-button {
//   background-color: blue;
//   color: white;
//   border: none;
//   padding: 10px;
//   width: 100%;
// }
// `;