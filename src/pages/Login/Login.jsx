import LoginForm from 'components/LoginForm/LoginForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginFormContainer } from './Login.styled';

export default function Login() {
  return (
    <HelmetProvider>
      <LoginFormContainer>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LoginForm />
      </LoginFormContainer>
    </HelmetProvider>
  );
}
