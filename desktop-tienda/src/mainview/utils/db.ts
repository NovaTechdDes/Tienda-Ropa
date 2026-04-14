import axios from 'axios';
console.log(import.meta.env);
const URL = import.meta.env.VITE_URL || 'http://localhost:3000';

export const db = () => {
  const db = axios.create({
    baseURL: URL,
  });

  return db;
};
