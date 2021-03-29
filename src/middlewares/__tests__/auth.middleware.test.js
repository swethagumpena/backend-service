const { TokenExpiredError } = require('jsonwebtoken');
const { authenticateJwt } = require('../auth.middleware');
const authService = require('../../services/auth.service');

describe('authenticateJwt Middleware', () => {
  let mockResponse;
  let mockSend;
  let mockNext;
  beforeEach(() => {
    mockSend = jest.fn();
    mockResponse = {
      status: jest.fn(() => ({ send: mockSend })),
    };
    mockNext = jest.fn();
  });
  it('should go to else when there is no authorization value', async () => {
    const mockRequest = {
      headers: { authorization: null },
    };
    await authenticateJwt(mockRequest, mockResponse, mockNext);
    expect(mockSend).toHaveBeenCalledWith();
    expect(mockResponse.status).toHaveBeenCalledWith(400);
  });
  it('should return status 401 when jwtToken is expired or bad token', async () => {
    const mockRequest = {
      headers: { authorization: 'Bearer sdfuahsdu283798wqr79' },
    };
    jest.spyOn(authService, 'verifyToken').mockImplementation((token, secret, callback) => { callback(new TokenExpiredError(), undefined); });
    await authenticateJwt(mockRequest, mockResponse, mockNext);
    expect(mockResponse.status).toHaveBeenCalledWith(401);
    expect(mockSend).toHaveBeenCalledWith();
  });
  it('should go to next', async () => {
    const mockRequest = {
      headers: { authorization: 'Bearer sdfuahsdu283798wqr79' },
    };
    jest.spyOn(authService, 'verifyToken').mockResolvedValue({ username: 'john doe' });
    await authenticateJwt(mockRequest, mockResponse, mockNext);
    expect(mockNext).toHaveBeenCalledWith();
  });
});
