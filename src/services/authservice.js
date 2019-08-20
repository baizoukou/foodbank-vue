import axios from 'axios';
import API_URL from '../config/api';


export const userService = {
  register: (user) => {
    const data = {
      username: user.username,
      email: user.email,
      password: user.password,
    };
    return axios({
      method: 'POST',
      url: `${API_URL}/users`,
      data,
    }).then((res) => res)
      .catch(error => error.response)
  },
  login: (user) => {
    const data = {
      email: user.email,
      password: user.password,
    };
    return axios({
      method: 'POST',
      url: `${API_URL}/users/login`,
      data,
    }).then((res) => res)
      .catch(error => error.response)
  },
  logout: () =>  {
    return axios({
      method: 'POST',
      url: `${API_URL}/users/logout`,
    }).then((res) => res)
      .catch(error => error.response)
  }
}