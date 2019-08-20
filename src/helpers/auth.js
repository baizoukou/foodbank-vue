import jwtDecode from 'jwt-decode';

export const checkAuth = () => {
  let isAuth = false
  const token = localStorage.getItem('app_token') || null;
  if(token) {
    const decoded = jwtDecode(token);
    const expiryDate = new Date(0);
    expiryDate.setUTCSeconds(decoded.exp);
    if(expiryDate > Date.now()) {
      isAuth = true;
    }
  }
  return isAuth;
};