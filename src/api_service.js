export const DEV_MODE = {
  STATUS: false,
  UN: "admin",
  PW: "12345678",
};

//  !  PRODUCTION
export const BASE_URL = "http://93.188.167.68:4005/api";
export const SOCKET_URL = "wss://amberclubpro.com:8001";
/* ===============================================================================
                            U S E R 
   ===============================================================================  */

// SIGNUP -> POST
export const api_signup = async (payload) => {
  const uri = `${BASE_URL}/users/create`;
  const response = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((res) => res.json());
  return response;
};

// USER DELETE ACCOUNT
export const api_deleteUserAccount = async (payload) => {
  const { userId, token } = payload;
  const uri = `${BASE_URL}/users/deleteAccount/${userId}`;
  const response = await fetch(uri, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  }).then((res) => res.json());
  return response;
};

// LOGIN -> POST
export const api_login = async (payload) => {
  const uri = `${BASE_URL}/users/login`;
  const response = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((res) => res.json());
  return response;
};
// SOCIAL LOGIN -> POST
export const api_socialLogin = async (payload) => {
  console.log("SOCIAL_LOGIN", payload);
  const uri = `${BASE_URL}/users/socialLogin`;
  const response = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((res) => res.json());
  return response;
};
// RESET PASSWORD -> PUT
export const api_reset_password = async (payload) => {
  const { token, data, userId } = payload;
  const uri = `${BASE_URL}/users/resetPassword/${userId}`;
  const response = await fetch(uri, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
  return response;
};

// LOGOUT -> POST
export const api_logout = async (payload) => {
  const { token } = payload;
  const uri = `${BASE_URL}/users/logout`;
  const response = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  }).then((res) => res.json());
  return response;
};
