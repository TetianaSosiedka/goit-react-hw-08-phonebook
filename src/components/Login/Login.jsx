import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Form } from './Login.styled';
import useGetContact from '../../hooks/useGetContact';
import { Rings } from 'react-loader-spinner';
import { nanoid } from 'nanoid';
import { useLoginMutation } from '../../redux/userApi';

import Notiflix from 'notiflix';

const Login = () => {
  const { email, password, setState } = useGetContact('');

  const [login, { isError, isLoading, isSuccess }] = useLoginMutation();

  const navigate = useNavigate();

  const idInputEmail = nanoid();
  const idInputPass = nanoid();

  const handleSubmit = event => {
    event.preventDefault();

    const userDate = { email, password };
    login(userDate);

    setState('');
  };

  const handeInputChange = event => {
    setState(event.target.name, event.target.value);
  };

  return (
    <>
      <h2>Complete the fields:</h2>
      <Form onSubmit={handleSubmit}>
        <label htmlFor={idInputEmail}>
          <span>Email</span>
          <input
            id={idInputEmail}
            onChange={handeInputChange}
            type="email"
            name="email"
            pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
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

        <Button
          variant="contained"
          size="small"
          type="submit"
          disabled={isLoading}
        >
          Login
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
          'There is no such user',
          'Ok',
          function cb() {
            // callback
          }
        )}
      {isSuccess &&
        Notiflix.Report.success(
          'Success',
          'Wellcome to your phonebook!',
          'Ok',
          function cb() {
            navigate(`/contacts`, { replace: true });
          }
        )}
    </>
  );
};

export default Login;
