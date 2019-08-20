import axios from 'axios';
import jwtDecode from 'jwt-decode';
import API_URL from '../config/api';

const token  = localStorage.getItem('app_token');

export const foodbankService = {
  getFoodBank: () => {
    return axios({
      method: 'GET',
      url: `${API_URL}/foodbank`,
      headers: { 'x-access-token': token }
    }).then(res => res)
      .catch(error => error.response)
  },
  filterFoodbank: (filter) => {
    const { dietaryRequirement, rate } = filter;
    const data = {
      ...(dietaryRequirement && { dietaryRequirement }),
      ...(rate && { rate })
    };
    return axios({
      method: 'POST',
      url: `${API_URL}/foodbank/filter`,
      headers: { 'x-access-token': token },
      data
    }).then(res => res)
      .catch(error => error.response)
  },
  createFoodBank: (foodbank) => {
    const data = {
      name: foodbank.name,
      city: foodbank.city,
      typedonation: foodbank.typedonation,
      quantity: foodbank.quantity,
      dietaryRequirement: foodbank.dietaryRequirement
    };
    return axios({
      method: 'POST',
      url: `${API_URL}/foodbank`,
      headers: { 'x-access-token': token },
      data,
    }).then(res => res)
    .catch(error => error.response)
  },
  updateFoodbank: (foodbank) => {
    const data = {
      name: foodbank.name,
      city: foodbank.city,
      typedonation: foodbank.typedonation,
      quantity: foodbank.quantity,
      dietaryRequirement: foodbank.dietaryRequirement
    };
    return axios({
      method: 'PUT',
      url: `${API_URL}/foodbank/${foodbank._id}`,
      headers: { 'x-access-token': token },
      data,
    }).then(res => res)
    .catch(error => error.response)
  },
  deleteFoodbank: (foodbankId) => {
    return axios({
      method: 'DELETE',
      url: `${API_URL}/foodbank/${foodbankId}`,
      headers: { 'x-access-token': token },
    }).then(res => res)
    .catch(error => error.response)
  },
  voteFoodbank: (foodbank) => {
    const data =  { rate: foodbank.rate, userId: jwtDecode(token).user_id }
    return axios({
      method: 'PUT',
      url: `${API_URL}/foodbank/${foodbank._id}/rate`,
      headers: { 'x-access-token': token },
      data
    }).then(res => res)
    .catch(error => error.response)
  }
}