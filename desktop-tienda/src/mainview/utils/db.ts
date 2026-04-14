import axios from 'axios';
const URL = import.meta.env.VITE_URL || 'http://localhost:3000';

export const db = () => {
  const db = axios.create({
    baseURL: URL,
  });

  return db;
};
