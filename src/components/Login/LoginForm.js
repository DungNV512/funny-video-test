import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { validateRequired } from "../../helper";
import { login } from "../../actions";

const LoginForm = () => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const validation = useCallback(() => {
    const error = {
      email: validateRequired(form.email),
      password: validateRequired(form.password),
    };
    const isValid = Object.values(error).every((e) => e === "");
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

      setError({
        ...error,
        [target.name]: validateRequired(value),
      });
    },
    [form, error]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const isValid = validation();
      if (isValid) {
        dispatch(
          login({
            email: e.target.email.value.trim(),
            password: e.target.password.value.trim(),
          })
        );
      }
    },
    [form, validation]
  );

  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div>
        <input
          id="email"
          name="email"
          onChange={handleInputChange}
          value={form.email}
          type="text"
          placeholder="Email"
        />
        {error.email && <span>{error.email}</span>}
      </div>
      <div>
        <input
          id="password"
          name="password"
          onChange={handleInputChange}
          value={form.password}
          type="password"
          placeholder="Password"
        />
        {error.password && <span>{error.password}</span>}
      </div>
      <button type="submit">
        {"Login/Register"}
      </button>
    </form>
  );
};

export default LoginForm;
