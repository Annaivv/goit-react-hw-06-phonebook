import { Contact } from 'components/Contact/Contact';
import { ItemsList, ListItem } from './ContactList.styled';

export const ContactList = () => {
  return (
    <div>
      <ItemsList>
        {[].map((item, idx) => (
          <ListItem key={idx}>
            <Contact contact={item} />
          </ListItem>
        ))}
      </ItemsList>
    </div>
  );
};
