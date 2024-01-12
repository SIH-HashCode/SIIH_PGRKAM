import axios from 'axios';

const API= axios.create({ baseURL: 'http://localhost:5000/'}) ;



export const fetchTimer = () => API.post('/dashboard/timerupdate');

export const fetchUsersByCity = () => API.get('/dashboard/getuserbycity');

export const fetchUsersByAge = () => API.get('/dashboard/getuserbyage');

export const fetchUsersBySexCount = () => API.get('/dashboard/getuserbysexcount');

export const fetchUsersByEducationCount = () => API.get('/dashboard/getuserbyeducation');

export const fetchUsersByCourseCount = () => API.get('/dashboard/getuserbycourse');

export const fetchUsersByStateCount = () => API.get('/dashboard/getuserbystatecount');

export const fetchUsersByDisablility = () => API.get('/dashboard/getuserbydisability');
