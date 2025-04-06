const URL = import.meta.env.VITE_URL_API

export const ENDPOINTS = {
  LOGIN: `${URL}/api/auth/login`,
  REGISTER: `${URL}/api/auth/register`,
  ME: `${URL}/api/auth/me`,
  PRODUCTS: `${URL}/api/pizzas`,
  CHECKOUTS: `${URL}/api/checkouts`,
  HEALTH: `${URL}/health`
}
