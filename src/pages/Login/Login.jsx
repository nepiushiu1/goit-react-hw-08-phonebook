import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from 'redux/auth/operations';
import css from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeLogin = e => {
    e.preventDefault();
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
    <div className={css.conteiner}>
      <form
        autoComplete="off"
        onSubmit={handleSubmitLogin}
        className={css.form}
      >
        <label className={css.name}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChangeLogin}
            className={css.input_email}
          />
        </label>
        <label className={css.name}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChangeLogin}
            className={css.input_password}
          />
        </label>
        <button type="submit" className={css.btn}>
          Log In
        </button>
      </form>
    </div>
  );
};
export default Login;
