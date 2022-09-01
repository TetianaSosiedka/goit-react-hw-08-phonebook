import { useDeleteContactMutation } from '../../redux/contactsApi';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';

import { Li } from './ContactsItem.styled';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactsItem = ({ contactDetales }) => {
  const [deleteItem, { isLoading, isSuccess, isError, isUninitialized }] =
    useDeleteContactMutation();

  const hendleDeleteContact = event => {
    deleteItem(event.target.id);
  };

  return (
    <Li>
      <Avatar
        alt={contactDetales.name}
        sx={{
          width: [30],
          height: [30],
        }}
        src="/broken-image.jpg"
      />
      {contactDetales.name}: {contactDetales.number}
      <Button
        variant="outlined"
        size="small"
        type="button"
        id={contactDetales.id}
        onClick={hendleDeleteContact}
        startIcon={<DeleteIcon />}
        disabled={isLoading}
      >
        Delete
      </Button>
      {!isUninitialized &&
        isError &&
        Notiflix.Report.failure('Error', 'Try again', 'Ok', function cb() {
          // callback
        })}
      {!isUninitialized &&
        isSuccess &&
        Notiflix.Report.success(
          'Success',
          'Contact deleted',
          'Ok',
          function cb() {
            // callback
          }
        )}
    </Li>
  );
};

ContactsItem.propTypes = {
  contactDetales: PropTypes.object,
};

export default ContactsItem;
