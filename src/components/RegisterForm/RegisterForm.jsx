import { Formik } from 'formik';
import {
  Form,
  Label,
  LabelWrapper,
  Field,
  FormButton,
  ErrorMessage,
} from './RegisterForm.styled';
import { FiMail, FiUser, FiLock, FiUserPlus } from 'react-icons/fi';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
// import { useAuth } from 'hooks/useAuth';
import { selectError } from 'redux/auth/selectors';
import { toast } from 'react-toastify';

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .max(20)
    .matches(
      /^[a-zA-Zа-яА-Я0-9]+(([' -][a-zA-Zа-яА-Я0-9 ])?[a-zA-Zа-яА-Я0-9]*)*$/,
      `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`
    )
    .required(),
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
  name: '',
  email: '',
  password: '',
};

export default function RegisterForm() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.name.trim(),
        email: values.email.trim(),
        password: values.password.trim(),
      })
    );
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <Label>
            <LabelWrapper>
              <FiUser size="20" />
              Name
            </LabelWrapper>
            <Field
              type="text"
              name="name"
              maxLength="40"
              // pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              // required
            />
            <ErrorMessage name="name" component="span" />
          </Label>
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
            <FiUserPlus size="20" />
            Register
          </FormButton>
        </Form>
      </Formik>
      {error?.response?.data?.name &&
        toast.error('This email is already registered')}
    </div>
  );
}

// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';

// export default function RegisterForm() {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit} autoComplete="off">
//       <label>
//         Username
//         <input type="text" name="name" />
//       </label>
//       <label>
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Register</button>
//     </form>
//   );
// }
