import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { ItemsList, ListItem } from './ContactList.styled';
import { getContactFilter, getContacts } from 'redux/selectors';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getContactFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <div>
      <ItemsList>
        {visibleContacts.map((item, idx) => (
          <ListItem key={idx}>
            <Contact contact={item} />
          </ListItem>
        ))}
      </ItemsList>
    </div>
  );
};
