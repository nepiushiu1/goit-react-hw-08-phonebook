import css from './ContactList.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contact/operations';
import { selectContacts, selectFilter } from 'redux/contact/selectors';

const getFilterContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = getFilterContacts(contacts, filter);

  return (
    <ol className={css.list}>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id} className={css.link}>
          <p className={css.title}> name</p> <p className={css.name}>{name}</p>{' '}
          : <p className={css.title}>number</p>
          <p className={css.name}>{number}</p>
          <button
            type="button"
            onClick={() => handleDelete(id)}
            className={css.btn}
          >
            delete
          </button>
        </li>
      ))}
    </ol>
  );
};
export default ContactList;
