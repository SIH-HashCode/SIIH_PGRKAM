import axios from 'axios';

const API= axios.create({ baseURL: 'http://localhost:5000/'}) ;

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});


export const fetchTimer = () => API.post('/dashboard/timerupdate');

export const fetchUsersByCity = () => API.get('/dashboard/getuserbycity');

export const fetchUsersByAge = () => API.get('/dashboard/getuserbyage');

export const fetchUsersBySexCount = () => API.get('/dashboard/getuserbysexcount');

export const fetchUsersByEducationCount = () => API.get('/dashboard/getuserbyeducation');

export const fetchUsersByCourseCount = () => API.get('/dashboard/getuserbycourse');

export const fetchUsersByStateCount = () => API.get('/dashboard/getuserbystatecount');
