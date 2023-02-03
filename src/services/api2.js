import axios from "axios";

export const API_URL = "http://localhost:8000";

export const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default class ApiService {
  static saveStripeInfo(data = {}) {
    return instance.post(`${API_URL}/payments/save-stripe-info/`, data);
  }
}
