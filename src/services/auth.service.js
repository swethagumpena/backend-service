const axios = require('axios').default;

const verifyToken = async (token) => {
  // axios.post('http://auth-service:7000/validateToken'
  const response = await axios.post(`http://${process.env.AUTH_HOST}:${process.env.AUTH_PORT}/validateToken`, {}, {
    headers:
    { Authorization: `Bearer ${token}` },
  });
  console.log('hi');
  return response.data;
};

module.exports = { verifyToken };
