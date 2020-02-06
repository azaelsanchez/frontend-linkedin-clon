import axios from "axios";

const authRepository = () => {
  let urlBack = "http://localhost:8000/user/";

  const tokenName = "token";
  const userStore = "user";

  const login = user => {
    console.log(user);
    return new Promise((resol, rej) => {
      const instance = axios.create({
        baseURL: urlBack,
        headers: {
          "Content-Type": "application/json"
        }
      });

      instance
        .post("login/", user)
        .then(res => {
          console.log(res);
          localStorage.setItem(
            tokenName,
            JSON.stringify(res.data.remember_token)
          );
          localStorage.setItem(userStore, JSON.stringify(res.data.user));
          resol(res.config);
        })
        .catch(error => {
          console.log(error);
          rej(error.response);
        });
    });
  };

  const register = user => {
    console.log(user);
    const profileStore = "profile";
    return new Promise((resol, rej) => {
      const instance = axios.create({
        baseURL: urlBack,
        headers: {
          "Content-Type": "application/json"
        }
      });
      instance
        .post("register/", user)
        .then(res => {
          console.log(user);
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

export default authRepository();
