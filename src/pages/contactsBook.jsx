import { useGetContactsQuery } from '../redux/contactsApi';

import Filter from '../components/Filter';
import ContactList from '../components/ContactsList';

const ContactsBook = () => {
  const { data: items = [], isLoading } = useGetContactsQuery('');

  return (
    <>
      <h2>Contacts</h2>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <>
          {items.length !== 0 ? (
            <>
              <Filter />
              <ContactList />
            </>
          ) : (
            <p>You have no contacts</p>
          )}
        </>
      )}
    </>
  );
};

export default ContactsBook;
