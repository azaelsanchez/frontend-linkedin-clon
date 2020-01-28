import React from "react";

export const RegisterForm = ({
  onChange,
  onSubmit,
  user: { name, email, password, repeatPassword }
}) => (
  <form className="form" onSubmit={onSubmit}>
    <label htmlFor="name">Name</label>
    <input type="text" id="name" name="name" value={name} onChange={onChange} />

    <label htmlFor="email">Email</label>
    <input
      type="text"
      id="email"
      name="email"
      value={email}
      onChange={onChange}
    />

    <label htmlFor="password">Password</label>
    <input
      type="password"
      name="password"
      id="password"
      value={password}
      onChange={onChange}
    />

    <label htmlFor="repeatPassword">Repeat Password</label>
    <input
      type="password"
      name="repeatPassword"
      id="repeatPassword"
      value={repeatPassword}
      onChange={onChange}
    />
    <input type="submit" value="Registrar" />
  </form>
);

export default RegisterForm;
