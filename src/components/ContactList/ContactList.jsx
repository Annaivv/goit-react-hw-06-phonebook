import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { ItemsList, ListItem } from './ContactList.styled';
import { getContactFilter, getContacts } from 'redux/selectors';

const getVisibleContacts = (contacts, filter) => {
  switch (filter) {
    case filter !== '':
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.includes(normalizedFilter)
      );

    case filter === '':
      return contacts;

    default:
      return contacts;
  }
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getContactFilter);
  const visibleContacts = getVisibleContacts(contacts, filterValue);

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
