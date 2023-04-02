import { useDispatch } from 'react-redux';
import { Button } from 'components/Button/Button';
import { ContactBlock } from './Contact.styled';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <ContactBlock>
      <p>
        <span>{contact.name}</span>
        <span>: </span>
        <span>{contact.number}</span>
      </p>
      <Button onClick={handleDelete}>Delete</Button>
    </ContactBlock>
  );
};
