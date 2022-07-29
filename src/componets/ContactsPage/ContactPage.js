import ContactList from '../ContactList';

import { useFetchContactsQuery } from '../../redux/contact_slice';

const ContactsPage = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();

  return (
    <div>
      {isFetching && <p>Loading!!!!!</p>}
      {contacts && <ContactList contacts={contacts} />}
    </div>
  );
};
export default ContactsPage;
