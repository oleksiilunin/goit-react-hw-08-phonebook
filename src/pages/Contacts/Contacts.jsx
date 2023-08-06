import { Header } from 'components/Header';
import { Section } from 'components/Section';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactsList } from 'components/ContactsList';
import Loader from 'components/Loader/Loader';
import { GlobalStyles } from 'components/GlobalStyles';

import { ToastContainer } from 'react-toastify';

import { Helmet } from 'react-helmet';

// import { useEffect } from 'react';
import {
  // useDispatch,
  useSelector,
} from 'react-redux';

// import { fetchContacts } from 'redux/contacts/operations';
import { getError, getIsLoading } from 'redux/contacts/selectors';

export default function Contacts() {
  // const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  return (
    <div>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Header headerTitle="Phonebook" />
      <Section>
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading && !error && <Loader />}
        <ContactsList />
      </Section>

      <GlobalStyles />
      <ToastContainer />
    </div>
  );
}
