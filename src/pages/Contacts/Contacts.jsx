import React from 'react';

// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { selectIsLoading, selectError } from 'redux/contacts/selector';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contact/operations';

import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
// import ContactList from 'components/ContactList/ContactList';

const Contacts = () => {
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        {/* {isLoading && !error && <Loader />} */}
        {/* {!isLoading && !error && <ContactList />} */}
      </div>
    </>
  );
};
export default Contacts;
