import axios from 'axios';
// import { toast } from 'react-toastify';

axios.defaults.baseURL =
  process.env.REACT_APP_NODE_ENV === 'production'
    ? process.env.REACT_APP_PROD_API_HOST
    : process.env.REACT_APP_DEV_API_HOST;
axios.defaults.headers.common['Access-Control-Allow-Origin']='*'; // for all requests
axios.defaults.headers.common['Content-Type']='application/json'; // for all requests
// axios.defaults.headers.common['x-frame-options']='SAMEORIGIN';
// axios.defaults.headers.common['Accept'] =
//   'text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8';
// const token = localStorage.getItem('usertoken');
// axios.defaults.headers.common['Authorization']='Bearer ' + token ? token : '';
axios.interceptors.response.use(
  (data) => {
    return data;
  },
  (error) => {
    // console.log(error)
    if (error.response.status === 401) {
      // console.log(error.response)
      console.log(error.response.data)
      alert('You are not authorized');
    }
    return error;
  }
);

export const register = async newUser => {
  return await axios
    .post('api/v1/users/signup', {
      username: newUser.username,
      confirm: newUser.confirm,
      email: newUser.email,
      password: newUser.password
    })

    .catch(
      setTimeout((err) => {
        // console.log(err);
        // toast.warning(`there is a problem ${err}`);
      }, 5000)
    );
};

export const login = async user => {
  return await axios
    .post('api/v1/users/login', {
      email: user.email,
      password: user.password
    })

    .catch((err) => {
      console.log(err);
      // toast.warning(`there is a problem ${err}`)
    });
};


export const reset = async resetUser => {
  return await axios
    .put('api/v1/users/reset-password', {
      email: resetUser.email,
      // old_password: resetUser.old_password,
      password: resetUser.password,
      confirm: resetUser.confirm,
    })

    .catch(
      setTimeout((err) => {
        // console.log(err);
        // toast.warning(`there is a problem ${err}`);
      }, 5000)
    );
};

export const forgot = async forgotUser => {
  return await axios
    .post('api/v1/users/forgot-password', {
      email: forgotUser.email,
      // url: forgotUser.url,
      // old_password: resetUser.old_password,
      // password: resetUser.password,
      // confirm: resetUser.confirm,
    })

    .catch(
      setTimeout((err) => {
        // console.log(err);
        // toast.warning(`there is a problem ${err}`);
      }, 5000)
    );
};