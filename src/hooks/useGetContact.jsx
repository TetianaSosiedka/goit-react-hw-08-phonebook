import { useState } from 'react';

const useGetContact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setState = (targetName, targetValue) => {
    switch (targetName) {
      case 'name':
        setName(targetValue);
        break;

      case 'number':
        setNumber(targetValue);
        break;

      case 'email':
        setEmail(targetValue);
        break;

      case 'password':
        setPassword(targetValue);
        break;

      default:
        setName('');
        setNumber('');
        setEmail('');
        break;
    }
  };

  return { name, number, email, password, setState };
};

export default useGetContact;
