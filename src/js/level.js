// Ваша функция:
import fetchData from '../shared/http';

const getLevel = (userId) => {
  const response = fetchData(`https://server/user/${userId}`);

  // TODO: логика обработки
  if (response.status === 'ok') {
    return `Ваш текущий уровень: ${response.level}`;
  }

  return 'Информация об уровне временно недоступна';
};

export default getLevel;
