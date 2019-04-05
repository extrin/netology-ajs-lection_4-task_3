import getLevel from '../src/js/level';
import fetchData from '../src/shared/http';

jest.mock('../src/shared/http');
beforeEach(() => {
  jest.resetAllMocks();
});

test('should call fetchData once', () => {
  fetchData.mockReturnValue({ level: '100' });
  fetchData(1);
  expect(fetchData).toHaveBeenCalledTimes(1);
});

test('should call fetchData with provided userId', () => {
  fetchData.mockReturnValue({ level: '100' });
  const userId = 1;
  const expectedUrl = 'https://server/user/1';
  getLevel(userId);
  expect(fetchData).toBeCalledWith(expectedUrl);
});

test('should return proper message when status is ok', () => {
  fetchData.mockReturnValue({ level: '100', status: 'ok' });
  const expectedMessage = 'Ваш текущий уровень: 100';
  expect(getLevel(1)).toBe(expectedMessage);
});

test('should return proper message when status differs from ok', () => {
  fetchData.mockReturnValue({ level: '100', status: 404 });
  const expectedMessage = 'Информация об уровне временно недоступна';
  expect(getLevel(1)).toBe(expectedMessage);
});
