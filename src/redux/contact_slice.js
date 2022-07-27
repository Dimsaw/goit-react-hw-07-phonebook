import { createSlice } from '@reduxjs/toolkit';
import { contactDefault } from '../data/data';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  items: contactDefault,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    addContact(state, { payload }) {
      state.items.push(payload);
    },
    deleteContact(state, { payload }) {
      state.items = state.items.filter(({ id }) => id !== payload);
    },
    filterContact(state, { payload }) {
      state.filter = payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const persisteContactReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact, filterContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
