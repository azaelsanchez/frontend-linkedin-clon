import React from "react";

export const RegisterForm = ({
  onChange,
  onSubmit,
  user: { name, surname, email, password, repeatPassword }
}) => (
  <form className="form" onSubmit={onSubmit}>
    <label htmlFor="name">Name</label>
    <input type="text" id="name" name="name" value={name} onChange={onChange} />

    <label htmlFor="surname">Surname</label>
    <input
      type="text"
      id="surname"
      name="surname"
      value={surname}
      onChange={onChange}
    />

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

    <div className="btn-log-in">
        <input type="submit" value="Register" id="btn-login" />
        {/* <input type="submit" value="I'm Company" id="btn-company" /> */}
    </div>
  </form>
);
