import httpClient from '../http-common';



const signinUser = (data) =>{
  return httpClient.post('/signin', data);
} 

export default {signinUser}
