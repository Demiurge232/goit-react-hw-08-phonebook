import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from 'redux/auth/auth-operatations';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(logIn({ email, password }));
    reset();
  };

  const reset = () => {
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
    >
      <FormLabel>
        Email
        <Input type="text" name="email" value={email} onChange={handleChange} />
      </FormLabel>
      <FormLabel>
        Password
        <Input
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </FormLabel>
      <Button
        type="submit"
        colorScheme="green"
        size="md"
        marginTop="15px"
        marginRight="auto"
        marginLeft="auto"
      >
        Sign in
      </Button>
    </FormControl>
  );
};
export default LoginForm;
