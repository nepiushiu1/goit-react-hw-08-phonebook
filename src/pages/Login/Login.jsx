import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from 'redux/auth/operations';

export const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeLogin = e => {
    const value = e.target.value;
    switch (e.target.name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmitLogin = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmitLogin}>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChangeLogin}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChangeLogin}
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
