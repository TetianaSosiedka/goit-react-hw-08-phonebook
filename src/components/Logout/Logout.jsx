import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Rings } from 'react-loader-spinner';
import Notiflix from 'notiflix';
import { useLogoutMutation } from '../../redux/userApi';
import { removeItems } from '../../redux/contacts';

import Button from '@mui/material/Button';

const Logout = () => {
  const dispatch = useDispatch();
  const { name, email, token } = useSelector(state => state.user);

  const [logout, { isError, isLoading, isSuccess }] = useLogoutMutation();

  const handleLogoutClick = () => {
    Notiflix.Confirm.show(
      'Confirm logout',
      'Do you want logout?',
      'Yes',
      'No',
      function okCb() {
        logout();
        dispatch(removeItems());
      },
      function cancelCb() {}
    );
  };

  return (
    <>
      {token ? (
        <>
          {' '}
          <h2>You are logged in as:</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <Button
            onClick={handleLogoutClick}
            variant="contained"
            size="small"
            type="submit"
            disabled={isLoading}
          >
            Logout
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
        </>
      ) : (
        <h2>You are not login.</h2>
      )}

      {isSuccess && <Navigate to="/login" replace />}
      {isError &&
        Notiflix.Report.failure(
          'Error',
          'An error occurred. Try again.',
          'Ok',
          function cb() {
            // callback
          }
        )}
    </>
  );
};

export default Logout;
