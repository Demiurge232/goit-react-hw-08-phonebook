import ContactItem from 'components/ContactItem/ContactItem';
import { ContactListUl } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFindContact } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const items = useSelector(selectFindContact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactListUl>
      {items.map(({ name, id, number }) => (
        <ContactItem name={name} key={id} id={id} phone={number} />
      ))}
    </ContactListUl>
  );
};

export default ContactList;
