import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RegisterFormContainer } from './Register.styled';

export default function Register() {
  return (
    <HelmetProvider>
      <RegisterFormContainer>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegisterForm />
      </RegisterFormContainer>
    </HelmetProvider>
  );
}
