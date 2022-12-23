import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contact/filterSlise';

const Filter = () => {
  const dispatch = useDispatch();
  const changeFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={changeFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};
export default Filter;
