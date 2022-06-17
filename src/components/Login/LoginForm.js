import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from '../../selector/auth/selectAuth';
import { validateEmail, validateRequired } from '../../helper';
import { login } from '../../actions';

const LoginForm = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const isAuth = useSelector(selectIsAuth);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState({
    email: '',
    password: '',
  });
  const validation = useCallback(() => {
    const error = {
      email: validateEmail(form.email),
      password: validateRequired(form.password),
    };
    const isValid = Object.values(error).every((e) => e === '');
    setError(error);
    return isValid;
  }, [form]);

  const handleInputChange = useCallback(
    (event) => {
      const target = event.target;
      const value = target.value;

      setForm({
        ...form,
        [target.name]: value,
      });

      if (target.name === 'email') {
        setError({
          ...error,
          email: validateEmail(value)
        })
      } else {
        setError({
          ...error,
          [target.name]: validateRequired(value),
        });
      }
    },
    [form, error]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setIsLoading(true);
      const isValid = validation();
      if (isValid) {
        //if (isAuth) {
        dispatch(
          login({
            email: form.email.trim(),
            password: form.password.trim(),
          })
        );
        // } else {
        //   dispatch(
        //     register({
        //       email: form.email.trim(),
        //       password: form.password.trim(),
        //     })
        //   );
        // }
      }
      setIsLoading(false);
    },
    [form, validation, dispatch]
  );

  return (
    <form
      className="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div className='input-wrapper'>
        <input
          id="email"
          name="email"
          onChange={handleInputChange}
          value={form.email}
          type="text"
          placeholder="Email"
          className={`input${error.email ? ' input-error' : ''}`}
        />
        {error.email && <span className="error">{error.email}</span>}
      </div>
      <div className='input-wrapper'>
        <input
          id="password"
          name="password"
          onChange={handleInputChange}
          value={form.password}
          type="password"
          placeholder="Password"
          className={`input${error.password ? ' input-error' : ''}`}
        />
        {error.password && <span className="error">{error.password}</span>}
      </div>
      <button type="submit" disabled={isLoading} className="btn">
        Login/Register
      </button>
    </form>
  );
};

export default LoginForm;
