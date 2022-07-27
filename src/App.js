import ContactsList from './componets/ContactsList';
import ContactForm from './componets/ContactForm';
import Filter from './componets/Filter';
import Container from './componets/Container';

import s from './App.module.css';

export default function App() {
  return (
    <>
      <Container>
        <h1 className={s.text}>Phonebook</h1>
        <ContactForm />

        <div>
          <h3 className={s.contacts}>Contacts</h3>
          <Filter />

          <ContactsList />
        </div>
      </Container>
    </>
  );
}
