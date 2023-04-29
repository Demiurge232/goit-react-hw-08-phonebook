import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Button, ListItem, Text } from '@chakra-ui/react';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handeleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <ListItem>
      <Text>
        {name}: {number}
      </Text>
      <Button
        type="button"
        onClick={handeleDelete}
        colorScheme="green"
        size="md"
        marginTop="15px"
        marginRight="auto"
        marginLeft="auto"
      >
        Delete
      </Button>
    </ListItem>
  );
};
export default ContactItem;

ContactItem.protoType = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};
