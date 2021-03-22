const axios = require('axios').default;

const verifyToken = async (token) => {
  const response = await axios.get('/validateToken', {
    headers:
    { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const verifyMockToken = (token) => {
  if (token === 'yes') {
    return true;
  } return false;
};

module.exports = { verifyToken, verifyMockToken };
