import React from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectIsLoading } from 'redux/contact/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contact/operations';
import { selectError } from 'redux/contact/selectors';

import Louder from 'components/Louder/Louder';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';

import css from './Contacts.module.css';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={css.conteiner}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <Louder />}
        {!isLoading && !error && <ContactList />}
      </div>
    </>
  );
};
export default Contacts;
