import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Filter from '../components/Filter/Filter';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Loader from 'components/Loader/Loader';
import { Heading } from '@chakra-ui/react';

export const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <Heading>Phonebook</Heading>
      <ContactForm />
      <Heading>Contacts</Heading>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
      <ToastContainer />
    </div>
  );
};
export default Contacts;
