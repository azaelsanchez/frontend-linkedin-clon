import axios from "axios";

const authCompanyRepo = () => {
  let urlBack = "http://localhost:8000/company/";

  const tokenName = "token";
  const companyStore = "company";

  const login = company => {
    console.log(company);
    return new Promise((resol, rej) => {
      const instance = axios.create({
        baseURL: urlBack,
        headers: {
          "Content-Type": "application/json"
        }
      });

      instance
        .post("login/", company)
        .then(res => {
          console.log(res);
          if (res.data?.remember_token)
            localStorage.setItem(
              tokenName,
              JSON.stringify(res.data?.remember_token)
            );
          if (res.data?.company)
            localStorage.setItem(
              companyStore,
              JSON.stringify(res.data.company)
            );
          console.log(res.config);
          resol(res.config);
        })
        .catch(error => {
          console.log(error);
          rej(error.response);
        });
    });
  };

  const register = company => {
    console.log(company);
    const profileStore = "profile";
    return new Promise((resol, rej) => {
      const instance = axios.create({
        baseURL: urlBack,
        headers: {
          "Content-Type": "application/json"
        }
      });
      instance
        .post("register/", company)
        .then(res => {
          console.log(company);
          localStorage.setItem(profileStore, JSON.stringify(res.data.user));
          resol(res.data);
        })
        .catch(error => {
          console.log(error);
          rej(error.response);
        });
    });
  };

  const logout = () => {
    return new Promise((resol, rej) => {
      const instance = axios.create({
        baseURL: urlBack,
        headers: {
          "Content-Type": "application/json"
        }
      });
      instance
        .post("logout/", {})
        .then(res => {
          localStorage.removeItem(tokenName);
          resol(res.data);
        })
        .catch(error => {
          console.log(error);
          rej(error.response);
        });
    });
  };
  return {
    login,
    register,
    logout
  };
};
