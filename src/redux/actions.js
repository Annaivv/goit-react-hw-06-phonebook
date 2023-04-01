import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contacts/addContact',
  (name, number) => {
    return {
      type: 'contacts/addContact',
      payload: {
        id: nanoid(),
        name,
        number,
      },
    };
  }
);

export const deleteContact = createAction('contacts/deleteContact');

export const setFilter = createAction('filter/setFilter');
