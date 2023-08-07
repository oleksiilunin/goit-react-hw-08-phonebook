import { Formik } from 'formik';
import {
  Form,
  Label,
  LabelWrapper,
  Field,
  FormButton,
  ErrorMessage,
} from './LoginForm.styled';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Enter a valid email address. For example: best@mail.com'
    )
    .required(),
  password: yup
    .string()
    .trim()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'The password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, and one digit.'
    )
    .required(),
});

const initialValues = {
  email: '',
  password: '',
};

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      logIn({
        email: values.email.trim(),
        password: values.password.trim(),
      })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <Label>
          <LabelWrapper>
            <FiMail size="20" />
            Email
          </LabelWrapper>
          <Field
            type="email"
            name="email"
            maxLength="40"
            // pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
          />
          <ErrorMessage name="email" component="span" />
        </Label>
        <Label>
          <LabelWrapper>
            <FiLock size="20" />
            Password
          </LabelWrapper>
          <Field
            type="password"
            name="password"
            maxLength="40"
            // pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
          />
          <ErrorMessage name="password" component="span" />
        </Label>
        <FormButton type="submit">
          <FiLogIn size="20" />
          Login
        </FormButton>
      </Form>
    </Formik>
  );
}

// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/operations';

// export default function LoginForm() {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       logIn({
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit} autoComplete="off">
//       <label>
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Log In</button>
//     </form>
//   );
// }
