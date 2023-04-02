import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { ItemsList, ListItem } from './ContactList.styled';
import { getFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  return (
    <div>
      <ItemsList>
        {contacts.map((item, idx) => (
          <ListItem key={idx}>
            <Contact contact={item} />
          </ListItem>
        ))}
      </ItemsList>
    </div>
  );
};
