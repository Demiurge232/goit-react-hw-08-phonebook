import { useDispatch } from 'react-redux';
import { findContact } from 'redux/contacts/filterSlice';
import { Input, FormLabel } from '@chakra-ui/react';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(findContact(event.currentTarget.value));
  };

  return (
    <FormLabel>
      <Input
        type="text"
        onChange={handleChange}
        placeholder="Find contacts by name"
      />
    </FormLabel>
  );
};

export default Filter;
