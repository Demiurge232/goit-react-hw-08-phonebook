import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ContactItemLi, ContactItemButton } from './ContactItem.styled';
import { deleteContact } from 'redux/operations';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handeleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <ContactItemLi>
      <span>
        {name}: {number}
      </span>
      <ContactItemButton type="button" onClick={handeleDelete}>
        Delete
      </ContactItemButton>
    </ContactItemLi>
  );
};
export default ContactItem;

ContactItem.protoType = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};
