const axios = require('axios').default;
const service = require('../auth.service');

describe('auth service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should return response from auth service', async () => {
    const mockToken = 'abc123';
    const mockReponse = {
      data: 'xyz',
    };
    const spyOnAxios = jest.spyOn(axios, 'post').mockResolvedValue(mockReponse);
    const response = await service.verifyToken(mockToken);
    expect(spyOnAxios).toHaveBeenCalledTimes(1);
    expect(response).toBe(mockReponse.data);
  });
  it('should return null when its a token has expired', async () => {
    const mockToken = 'abc123';
    const spyOnAxios = jest.spyOn(axios, 'post').mockResolvedValue(null);
    const response = await service.verifyToken(mockToken);
    expect(spyOnAxios).toHaveBeenCalledTimes(1);
    expect(response).toBe(null);
  });
});
