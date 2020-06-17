// Checks if we are in the browser
export const isBrowser = () => typeof window !== 'undefined';

export const getPass = () =>
  isBrowser() && window.localStorage.getItem('gatsbyPass')
    ? JSON.parse(window.localStorage.getItem('gatsbyPass'))
    : {};

const setPass = (pass) =>
  window.localStorage.setItem('gatsbyPass', JSON.stringify(pass));

export const handleLogin = ({ password }) => {
  if (password === `darinisbuzon`) {
    return setPass({
      password: `darinisbuzon`,
    });
  }

  return false;
};

export const isLoggedIn = () => {
  const pass = getPass();

  return !!pass.password;
};
