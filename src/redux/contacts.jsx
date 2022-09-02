import { createSlice } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';

const initialState = {
  items: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    removeItems: state => {
      state.items = initialState.items;
    },
    addItems: (state, { payload }) => {
      state.items = [...state.items, payload];
    },
  },
  extraReducers: builder => {
    //getContacts
    builder.addMatcher(
      contactsApi.endpoints.getContacts.matchFulfilled,
      (state, { payload }) => {
        state.items = payload;
      }
    );
    //addContacts
    builder.addMatcher(
      contactsApi.endpoints.addContact.matchFulfilled,
      (state, { payload }) => {
        console.log(state.items);
        state.items = [...state.items, payload];
      }
    );
  },
});
export const { removeItems, addItems } = contactsSlice.actions;

export default contactsSlice.reducer;
