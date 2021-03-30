const axios = require('axios').default;

const verifyToken = async (token) => {
  console.log('auth.service.js', process.env.AUTH_HOST, process.env.AUTH_PORT);
  // axios.post('http://auth-service:7000/validateToken'
  const response = await axios.post(`http://${process.env.AUTH_HOST}:${process.env.AUTH_PORT}/validateToken`, {}, {
    headers:
    { Authorization: `Bearer ${token}` },
  });
  // console.log('auth service middleware', response);
  if (response) {
    return response.data;
  }
  return null;
};

module.exports = { verifyToken };
