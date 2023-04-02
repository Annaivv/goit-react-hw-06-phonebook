export const getContacts = state => state.contacts;

export const getContactFilter = state => state.filter;

export const getFilteredContacts = state => {
  const filterContacts = state.filter
    ? state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(state.filter)
      )
    : state.contacts;
  return filterContacts;
};
