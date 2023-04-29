import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operatations';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <FormControl
      as="form"
      onSubmit={handleSubmit}
      w="500px"
      h="300px"
      marginRight="auto"
      marginLeft="auto"
      autoComplete="off"
    >
      <FormLabel>
        Name
        <Input type="text" name="name" onChange={handleChange} value={name} />
      </FormLabel>
      <FormLabel>
        Email
        <Input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </FormLabel>
      <FormLabel>
        Password
        <Input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </FormLabel>
      <Button
        type="submt"
        colorScheme="green"
        size="md"
        marginTop="15px"
        marginRight="auto"
        marginLeft="auto"
      >
        Register
      </Button>
    </FormControl>
  );
};
export default RegisterForm;
