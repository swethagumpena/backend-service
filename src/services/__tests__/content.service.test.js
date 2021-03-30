const contentService = require('../content.service');
const { Content } = require('../../models');

describe('content service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should create a new content', async () => {
    const mockResponse = {
      id: 13,
      typeName: 'test',
      fields: ['sweetha'],
      instances: [],
      createdAt: '2021-03-30T01:39:04.354Z',
      updatedAt: '2021-03-30T07:20:28.830Z',
    };
    const spyOnCreateContent = jest
      .spyOn(Content, 'create')
      .mockResolvedValue(mockResponse);
    const response = await contentService.createContent('test');
    expect(response).toStrictEqual(mockResponse);
    expect(spyOnCreateContent).toHaveBeenCalledWith({ typeName: 'test' });
  });

  it('should get a list of contents', async () => {
    const mockResponse = [{
      id: 13,
      typeName: 'test',
      fields: ['sweetha'],
      instances: [],
      createdAt: '2021-03-30T01:39:04.354Z',
      updatedAt: '2021-03-30T07:20:28.830Z',
    }];
    jest
      .spyOn(Content, 'findAll')
      .mockResolvedValue(mockResponse);
    const response = await contentService.fetchContent();
    expect(response).toStrictEqual(mockResponse);
  });

  it('should get fields based on typeName', async () => {
    const mockResponse = {
      id: 13,
      typeName: 'test',
      fields: ['sweetha'],
      instances: [],
      createdAt: '2021-03-30T01:39:04.354Z',
      updatedAt: '2021-03-30T07:20:28.830Z',
    };
    const spyOnContentByType = jest
      .spyOn(Content, 'findOne')
      .mockResolvedValue(mockResponse);
    const response = await contentService.getFields('test');
    expect(response).toStrictEqual(mockResponse.fields);
    expect(spyOnContentByType).toHaveBeenCalledWith({
      attributes: ['fields'],
      where: {
        typeName: 'test',
      },
    });
  });

  it('should add a new field if given typeName is present', async () => {
    const mockResponse = [{
      id: 13,
      typeName: 'test',
      fields: ['sweetha'],
      instances: [],
      createdAt: '2021-03-30T01:39:04.354Z',
      updatedAt: '2021-03-30T07:20:28.830Z',
    }];
    jest.spyOn(Content, 'findOne')
      .mockResolvedValue(true);
    const spyOnCreateField = jest
      .spyOn(Content, 'update')
      .mockResolvedValue(mockResponse);
    const response = await contentService.addField('test', 'sweetha');
    expect(response).toStrictEqual(mockResponse);
    const mockFieldsArr = [];
    expect(spyOnCreateField).toHaveBeenCalledWith({ fields: mockFieldsArr },
      {
        where: { typeName: 'test' },
        returning: true,
      });
  });
});
