import Button from '@mui/material/Button';
import { Form } from './Register.styled';
import useGetContact from '../../hooks/useGetContact';
import { nanoid } from 'nanoid';
import { Rings } from 'react-loader-spinner';
import Notiflix from 'notiflix';

import { useRegisterMutation } from '../../redux/userApi';

const Register = () => {
  const { name, email, password, setState } = useGetContact('');

  const [registerApi, { isLoading, isError }] = useRegisterMutation();

  const idInputName = nanoid();
  const idInputEmail = nanoid();
  const idInputPass = nanoid();

  const handleSubmit = event => {
    event.preventDefault();

    const userDate = { name, email, password };
    registerApi(userDate);
    setState('');
  };

  const handeInputChange = event => {
    setState(event.target.name, event.target.value);
  };

  return (
    <>
      <h2>Complete the fields:</h2>
      <Form onSubmit={handleSubmit}>
        <label htmlFor={idInputName}>
          <span>Name</span>
          <input
            id={idInputName}
            onChange={handeInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
          />
        </label>
        <label htmlFor={idInputEmail}>
          <span>Email</span>
          <input
            id={idInputEmail}
            onChange={handeInputChange}
            type="email"
            name="email"
            pattern="\[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="Email must have @ and can contain numbers, letters, dots, underscores and dashes."
            required
            value={email}
          />
        </label>
        <label htmlFor={idInputPass}>
          <span>Password</span>
          <input
            id={idInputPass}
            onChange={handeInputChange}
            type="password"
            name="password"
            // pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
            // title="Password mast have UpperCase, LowerCase, Number/SpecialChar and min 8 Chars"
            required
            value={password}
          />
        </label>

        <Button variant="contained" size="small" type="submit">
          register
          {isLoading && (
            <Rings
              height="30px"
              width="30px"
              radius="9"
              color="#ffffff"
              ariaLabel="three-dots-loading"
            />
          )}
        </Button>
      </Form>
      {isError &&
        Notiflix.Report.failure(
          'Error',
          'An error registration. Try again.',
          'Ok',
          function cb() {
            // callback
          }
        )}
    </>
  );
};

export default Register;
