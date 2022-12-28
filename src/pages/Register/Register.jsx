import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { register } from 'redux/auth/operations';

import css from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    e.preventDefault();
    const value = e.target.value;
    switch (e.target.name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    clearForm();
  };

  return (
    <div className={css.conteiner}>
      <form autoComplete="off" onSubmit={handleSubmit} className={css.form}>
        <label className={css.name}>
          Username
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            className={css.input_username}
          />
        </label>
        <label className={css.name}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={css.input_email}
          />
        </label>
        <label className={css.name}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={css.input_password}
          />
        </label>
        <button type="submit" className={css.btn}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
