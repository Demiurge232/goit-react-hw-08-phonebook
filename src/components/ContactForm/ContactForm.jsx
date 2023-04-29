import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addContact } from 'redux/contacts/operations';
import { selectItems } from 'redux/contacts/selectors';
import { Input, FormControl, FormLabel, Button } from '@chakra-ui/react';

export default function ContactForm() {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const handleSubmit = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;

    if (items.find(contact => contact.name === name.value)) {
      toast.error(`${name.value} is already in contacts`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      return;
    }

    const contactData = {
      name: name.value,
      number: number.value,
    };

    dispatch(addContact(contactData));
    reset(event);
  };

  const reset = event => {
    const { name, number } = event.target.elements;
    name.value = '';
    number.value = '';
  };

  return (
    <FormControl
      as="form"
      onSubmit={handleSubmit}
      w="500px"
      display="flex"
      flexDirection="column"
    >
      <FormLabel>Name</FormLabel>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <FormLabel>Number</FormLabel>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button
        type="submit"
        colorScheme="green"
        size="md"
        marginTop="15px"
        marginRight="auto"
        marginLeft="auto"
      >
        Add contact
      </Button>
    </FormControl>
  );
}
