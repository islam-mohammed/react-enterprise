// base API file in which we configure a client instance and create a few wrapper methods.
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

// API staus enum
export enum ApiStatus {
  IDLE = 'Ideal', // The starting point
  PENDING = 'Pending', // An action is being performed
  SUCCESS = 'Success', // An action finished successfully
  ERROR = 'Error', // An action finished with an error
}
// Default config for the axios instance
const axiosParams = {
  // Set different base URL based on the environment
  baseURL:
    process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : '/',
  'Content-Type': 'application/json',
}
// Create axios instance with default params
const axiosInstance = axios.create(axiosParams)
// Main api function
const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axios.get<T>(url, config),
    delete: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axios.delete<T>(url, config),
    post: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.post<T>(url, body, config),
    patch: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.patch<T>(url, body, config),
    put: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.put<T>(url, body, config),
  }
}
export default api(axiosInstance)
