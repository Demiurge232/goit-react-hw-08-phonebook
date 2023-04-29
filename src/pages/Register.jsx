import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operatations';

export const Register = () => {
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
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Name
          <input type="text" name="name" onChange={handleChange} value={name} />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </label>
        <button type="submt">Register</button>
      </form>
    </>
  );
};
export default Register;
