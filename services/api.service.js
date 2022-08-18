const axios = require('axios');
 
class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://ih-crud-api.herokuapp.com'
    });
  }
 
  getAllFlowers = () => {
    return this.api.get('/flowers');
  };
 
  getOneFlower = (flowerId) => {
    return this.api.get(`/flowers/${flowerId}`);
  }
 
 
}
 
module.exports = ApiService;