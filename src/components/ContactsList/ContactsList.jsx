import { useSelector } from 'react-redux';

//import { useGetContactsQuery } from '../../redux/contactsApiSlice';

import { List } from './ContactsList.styled';

import ContactsItem from '../ContactsItem/ContactsItem';

const ContactList = () => {
  //const { data: items = [] } = useGetContactsQuery('');
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.value);

  const handleVisiblyContacts = () => {
    const normalizeFilter = filter.trim().toLowerCase();

    const visiblyContacts = items.filter(contact => {
      return contact.name.toLowerCase().includes(normalizeFilter);
    });
    visiblyContacts.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    return visiblyContacts;
  };

  return (
    <>
      <List>
        {handleVisiblyContacts().map(item => {
          return <ContactsItem key={item.id} contactDetales={item} />;
        })}
      </List>
    </>
  );
};

export default ContactList;
