import axios from 'axios';
import { API_BASE_URL } from '../constants';

export async function fetchUsers() {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
}
