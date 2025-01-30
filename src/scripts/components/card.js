function createCard(cardData, handleCardClick) {
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
        likeButton.classList.toggle('card__like-button_is-active');
    });

    // Удаление карточки
    deleteButton.addEventListener('click', () => {
        cardElement.remove();
    });

    // Открытие попапа с картинкой
    cardImage.addEventListener('click', () => {
        handleCardClick(cardData);
    });

    return cardElement;
};

export {createCard}