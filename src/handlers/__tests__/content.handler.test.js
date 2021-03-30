const contentService = require('../../services/content.service');
const contentHandler = require('../content.handler');

describe('createContentHandler', () => {
  const mockRequest = {
    body: {
      typeName: 'company',
    },
  };
  const mockResponse = {
    status: jest.fn(() => mockResponse),
    json: jest.fn(),
  };
  const responseValue = {
    id: 7,
    typeName: 'company',
    fields: [],
    instances: [],
    updatedAt: '2021-03-11T13:40:23.463Z',
    createdAt: '2021-03-11T13:40:23.463Z',
  };
  it('should return status code 200 and create content with new type name', async () => {
    jest.spyOn(contentService, 'createContent').mockResolvedValueOnce(responseValue);
    await contentHandler.createContentHandler(mockRequest, mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({ data: responseValue });
    expect(contentService.createContent).toHaveBeenCalledWith('company');
  });
  it('should set status code to 500 if error in accessing db', async () => {
    jest.spyOn(contentService, 'createContent').mockRejectedValue(new Error('Error in creating'));
    await contentHandler.createContentHandler(mockRequest, mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(500);
  });
});

describe('getContentHandler', () => {
  const mockRequest = {
    body: {
      typeName: 'company',
    },
  };
  const mockResponse = {
    status: jest.fn(() => mockResponse),
    json: jest.fn(),
  };
  const responseValue = {
    id: 7,
    typeName: 'company',
    fields: [],
    instances: [],
    updatedAt: '2021-03-11T13:40:23.463Z',
    createdAt: '2021-03-11T13:40:23.463Z',
  };
  it('should return status code 200 and fetch content', async () => {
    jest.spyOn(contentService, 'fetchContent').mockResolvedValueOnce(responseValue);
    await contentHandler.getContentHandler(mockRequest, mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({ data: responseValue });
  });
  it('should set status code to 500 if error in accessing db', async () => {
    jest.spyOn(contentService, 'createContent').mockRejectedValue(new Error('Error in creating'));
    await contentHandler.getContentHandler(mockRequest, mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(500);
  });
});

describe('addFieldHandler', () => {
  const mockRequest = {
    body: {
      params: {
        typeName: 'company',
      },
      field: 'xxx',
    },
  };
  const mockResponse = {
    status: jest.fn(() => mockResponse),
    json: jest.fn(),
  };
  const responseValue = {
    id: 7,
    typeName: 'company',
    fields: ['xxx'],
    instances: [],
    updatedAt: '2021-03-11T13:40:23.463Z',
    createdAt: '2021-03-11T13:40:23.463Z',
  };
  it('should return status code 200 and add new field', async () => {
    jest.spyOn(contentService, 'addField').mockResolvedValueOnce(responseValue);
    await contentHandler.addFieldHandler(mockRequest, mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({ data: responseValue });
  });
  it('should set status code to 500 if error in accessing db', async () => {
    jest.spyOn(contentService, 'addField').mockRejectedValue(new Error('Error in creating'));
    await contentHandler.getContentHandler(mockRequest, mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(500);
  });
});
