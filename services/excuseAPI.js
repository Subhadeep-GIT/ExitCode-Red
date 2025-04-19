// services/excuseAPI.js

import axios from 'axios';

const BASE_URL = 'https://escape-plan-api.vercel.app/excuses';

export const getRandomExcuse = async () => {
  const response = await axios.get(`${BASE_URL}/random`);
  return response.data;
};

export const getCategoryExcuse = async (category) => {
  const response = await axios.get(`${BASE_URL}/${category}`);
  return response.data;
};