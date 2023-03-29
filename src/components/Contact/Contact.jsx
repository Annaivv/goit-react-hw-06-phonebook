import { Button } from 'components/Button/Button';
import { ContactBlock } from './Contact.styled';

export const Contact = () => {
  return (
    <ContactBlock>
      <p>
        <span>Name</span>
        <span>: </span>
        <span>Number</span>
      </p>
      <Button>Delete</Button>
    </ContactBlock>
  );
};
