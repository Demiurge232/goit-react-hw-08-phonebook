import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logIn } from 'redux/auth/auth-operatations';

export const Login = () => {
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
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </>
  );
};
export default Login;
