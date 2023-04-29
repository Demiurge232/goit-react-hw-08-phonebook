import ContactItem from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectFindContact } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { List } from '@chakra-ui/react';

export const ContactList = () => {
  const items = useSelector(selectFindContact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List display="flex" flexWrap="wrap" gap="40px">
      {items.map(({ name, id, number }) => (
        <ContactItem name={name} key={id} id={id} number={number} />
      ))}
    </List>
  );
};

export default ContactList;
