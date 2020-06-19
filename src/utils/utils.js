import Cookies from 'js-cookie';
import queryString from 'query-string';

const COOKIE_NAME = 'gatsby-theme-password-protect';
const expireTime = new Date(new Date().getTime() + 60 * 60 * 1000);

export const setSessionPassword = (passwordCandidate) => {
  Cookies.set(COOKIE_NAME, passwordCandidate, { expires: expireTime });
};

export const getSessionPassword = () => {
  return Cookies.get(COOKIE_NAME);
};

export const getQueryPassword = (location) => {
  const { secret } = queryString.parse(location.search);
  return secret;
};

export const isProtectedPage = ({ pathname }, pagePaths, partialMatching) => {
  const isProtected = pagePaths.find((path) => {
    const isIndexPage = pathname === '/';

    if (partialMatching && !isIndexPage) {
      return pathname.startsWith(path);
    }

    return path === pathname;
  });

  return isProtected;
};
