import axios from 'axios';
// import { toast } from 'react-toastify';

export const CLOUDINARY_UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
export const CLOUDINARY_UPLOAD_URL = process.env.REACT_APP_CLOUDINARY_UPLOAD_URL;

const API_HOST =
  process.env.REACT_APP_NODE_ENV === 'production'
    ? process.env.REACT_APP_PROD_API_HOST
    : process.env.REACT_APP_DEV_API_HOST;
axios.defaults.baseURL = API_HOST;
// console.log(API_HOST);
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'; // for all requests
axios.defaults.headers.common['Content-Type'] = 'application/json'; // for all requests
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
      // console.log(error.response.data);
      alert('You are not authorized');
    }
    return error;
  }
);

export const register = async (newUser) => {
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

export const login = async (user) => {
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

export const reset = async (resetUser) => {
  return await axios
    .put('api/v1/users/reset-password', {
      email: resetUser.email,
      // old_password: resetUser.old_password,
      password: resetUser.password,
      confirm: resetUser.confirm
    })

    .catch(
      setTimeout((err) => {
        // console.log(err);
        // toast.warning(`there is a problem ${err}`);
      }, 5000)
    );
};

export const forgot = async (forgotUser) => {
  return await axios
    .post('api/v1/users/forgot-password', {
      email: forgotUser.email
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

export const edit_profile = async (user) => {
  return await axios
    .patch('api/v1/users/profile', {
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      address: user.address,
      email: user.email,
      phone_number: user.phone_number,

      city: user.city,
      country: user.country,
      postal_code: user.postal_code,
      bio: user.bio,

      is_farmer: user.is_farmer,
      is_vendor: user.is_vendor,

      image_url: user.image_url
    })

    .catch((err) => {
      console.log(err);
      // toast.warning(`there is a problem ${err}`)
    });
};

// export const edit_profile1 = (file, user) => {
//     try {
//     const url = 'api/v1/users/profile';
//     const formData = new FormData();
//     formData.append('file', file);

//     formData.append('first_name', user.first_name);
//     formData.append('last_name', user.last_name);
//     formData.append('username', user.username);
//     formData.append('address', user.address);
//     formData.append('email', user.email);
//     formData.append('phone_number', user.phone_number);

//     formData.append('city', user.city);
//     formData.append('country', user.country);
//     formData.append('postal_code', user.postal_code);
//     formData.append('bio', user.bio);

//     formData.append('is_farmer', user.is_farmer);
//     formData.append('is_vendor', user.is_vendor);

//     formData.append('image_url', user.image_url);

//     return axios.patch(url, formData);
//   }
//   catch (err) {
//     return err;
//   }
// }


const uri = API_HOST;
// console.log(uri)
export const api = {
  post(endpoint, data) {
    return fetch(`${uri}${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'cors',
      headers: {
        'token': localStorage.getItem('usertoken'),
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '<origin> | *',
        'Access-Control-Allow-Credentials': 'true'
      }
    });
  },

  update(endpoint, data = null) {
    return fetch(`${uri}${endpoint}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      mode: 'cors',
      headers: {
        'token': localStorage.getItem('usertoken'),
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '<origin> | *',
        'Access-Control-Allow-Credentials': 'true'
      }
    });
  },

  get(endpoint) {
    return fetch(`${uri}${endpoint}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'token': localStorage.getItem('usertoken'),
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '<origin> | *',
        'Access-Control-Allow-Credentials': 'true'
      }
    });
  },

  delete(endpoint) {
    return fetch(`${uri}${endpoint}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'token': localStorage.getItem('usertoken'),
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '<origin> | *',
        'Access-Control-Allow-Credentials': 'true'
      }
    });
  }
};
