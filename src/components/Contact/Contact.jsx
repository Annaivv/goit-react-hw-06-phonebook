import { Button } from 'components/Button/Button';
import { ContactBlock } from './Contact.styled';

export const Contact = ({ contact }) => {
  return (
    <ContactBlock>
      <p>
        <span>{contact.name}</span>
        <span>: </span>
        <span>{contact.number}</span>
      </p>
      <Button>Delete</Button>
    </ContactBlock>
  );
};
