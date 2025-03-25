import axios from "axios";

const url = process.env.REACT_APP_API_URL;

function config(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

//auth
function SignUp(body) {
  const promisse = axios.post(`${url}/sign-up`, body);
  return promisse;
}

function SignIn(body) {
  const promisse = axios.post(`${url}/sign-in`, body);
  return promisse;
}

//transactions - expenses, incomes
function getTransactions(token) {
  const promisse = axios.get(`${url}/transactions`, config(token));
  return promisse;
}

function postTransactions(body, token) {
  const promisse = axios.post(`${url}/newtransaction`, body, config(token));
  return promisse;
}

const api = {
  SignUp,
  SignIn,
  getTransactions,
  postTransactions,
};

export default api;
