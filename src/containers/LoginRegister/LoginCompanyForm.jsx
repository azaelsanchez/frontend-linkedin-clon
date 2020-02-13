import React from "react";

export const LoginCompanyForm = ({
  onChange,
  onSubmit,
  company: { email, password }
}) => (
  <form className="form" onSubmit={onSubmit}>
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
    <div className="btn-log-in">
      <input type="submit" value="Logged in" id="btn-login" />
      {/* <input type="submit" value="I'm Company" id="btn-company" /> */}
    </div>
  </form>
);
