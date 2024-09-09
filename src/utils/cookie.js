import Cookies from 'js-cookie';

const setCookie = (cname, cvalue, exdays) => {
  Cookies.set(cname, cvalue, { expires: exdays });
};

const getCookie = (cname) => {
  return Cookies.get(cname) || '';
};

const deleteCookie = (name) => {
  Cookies.remove(name);
};

export { setCookie, getCookie, deleteCookie };