// Функция для обработки лайка карточки
function likeCard(likeButton) {
  likeButton.classList.toggle('card__like-button_is-active');
}

// Функция для удаления карточки
function deleteCard(cardElement) {
  cardElement.remove();
}

// Функция создания карточки
function createCard(cardData, { deleteCard, likeCard, handleImageClick }) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const likeButton = cardElement.querySelector('.card__like-button');
  const deleteButton = cardElement.querySelector('.card__delete-button');

  // Заполняем данные карточки
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  // Лайк карточки
  likeButton.addEventListener('click', () => {
    likeCard(likeButton); // Вызываем переданную функцию для обработки лайка
  });

  // Удаление карточки
  deleteButton.addEventListener('click', () => {
    deleteCard(cardElement); // Вызываем переданную функцию для удаления карточки
  });

  // Открытие попапа с картинкой
  cardImage.addEventListener('click', () => {
    handleImageClick(cardData); // Вызываем переданную функцию для обработки клика по изображению
  });

  return cardElement;
}

export { createCard, likeCard, deleteCard };