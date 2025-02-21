import './pages/index.css'; // Импорт главного файла стилей 
import { createCard, handleLikeClick, handleDeleteClick } from './scripts/components/card.js'; // Работа с карточками 
import { openModal, closeModal, closeModalOnOverlayClick, addCloseButtonHandler } from './scripts/components/modal.js'; // Функции для работы с окнами
import { enableValidation, clearValidation, validationConfig } from './scripts/components/validation.js' //Валидация форм
import {
  getUserInfo,
  getInitialCards,
  updateUserInfo,
  addNewCard,
  updateAvatar,
} from './scripts/components/api.js'; // Работа с API


// DOM узлы 
const cardList = document.querySelector('.places__list'); // Контейнер для карточек 

// DOM-элементы 
const profileEditButton = document.querySelector('.profile__edit-button'); 
const profilePopup = document.querySelector('.popup_type_edit'); 
const profileForm = profilePopup.querySelector('.popup__form'); 
const saveButton = profileForm.querySelector('.popup__button');
const nameInput = profileForm.querySelector('.popup__input_type_name'); 
const jobInput = profileForm.querySelector('.popup__input_type_description'); 
const profileName = document.querySelector('.profile__title'); 
const profileDescription = document.querySelector('.profile__description'); 
const addCardButton = document.querySelector('.profile__add-button'); 
const addCardPopup = document.querySelector('.popup_type_new-card'); 
const addCardForm = addCardPopup.querySelector('.popup__form'); 
const addSaveButton = addCardForm.querySelector('.popup__button');
const cardNameInput = addCardForm.querySelector('.popup__input_type_card-name'); 
const cardLinkInput = addCardForm.querySelector('.popup__input_type_url'); 
const imagePopup = document.querySelector('.popup_type_image'); 
const popupImage = imagePopup.querySelector('.popup__image'); 
const popupCaption = imagePopup.querySelector('.popup__caption'); 
const profileAvatar = document.querySelector('.profile__image');
const avatarPopup = document.querySelector('.popup_type_update-avatar');
const avatarForm = avatarPopup.querySelector('.popup__form');
const avatarInput = avatarForm.querySelector('.popup__input_type_avatar-url');
const avatarSaveButton = avatarForm.querySelector('.popup__button');

// Переменная для хранения ID пользователя
let userId;

// Функция для обработки клика по изображению карточки 
function handleImageClick(cardData) { 
  popupImage.src = cardData.link; 
  popupImage.alt = cardData.name; 
  popupCaption.textContent = cardData.name; 
  openModal(imagePopup); 
} 

// Рендеринг карточек (вот тут поменять)
function renderCards(cards) { 
  cards.forEach((cardData) => { 
    const cardElement = createCard(cardData, userId, { handleDeleteClick, handleLikeClick, handleImageClick }); 
    cardList.append(cardElement); 
  }); 
} 

// Функция для открытия попапа редактирования профиля
function openProfilePopup() {
  clearValidation(profileForm, validationConfig); // Передаём validationConfig
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(profilePopup);
}

// Добавляем обработчик события
profileEditButton.addEventListener('click', openProfilePopup);

// Закрытие попапа кликом на оверлей 
closeModalOnOverlayClick(profilePopup); 
closeModalOnOverlayClick(addCardPopup); 
closeModalOnOverlayClick(imagePopup); 
closeModalOnOverlayClick(avatarPopup); 

// Добавляем обработчики для кнопок закрытия 
addCloseButtonHandler(profilePopup); 
addCloseButtonHandler(addCardPopup); 
addCloseButtonHandler(imagePopup); 
addCloseButtonHandler(avatarPopup); 

// Обработчик отправки формы редактирования профиля 
profileForm.addEventListener('submit', (evt) => { 
  evt.preventDefault(); 
  saveButton.textContent = 'Сохранение...'
  updateUserInfo(nameInput.value, jobInput.value)
    .then((userData) => {
      profileName.textContent = userData.name;
      profileDescription.textContent = userData.about;
      closeModal(profilePopup);
    })
    .catch((err) => console.error(`Ошибка при обновлении профиля: ${err}`))
    .finally(() => {
      saveButton.textContent = 'Сохранить';
    })
}); 

// Открытие попапа добавления карточки
function openAddCardPopup() {
  openModal(addCardPopup);
}

// Обработчик добавления карточки
addCardButton.addEventListener('click', openAddCardPopup);

// Обработчик отправки формы добавления карточки 
addCardForm.addEventListener('submit', (evt) => { 
  evt.preventDefault(); 
  addSaveButton.textContent = 'Сохранение...';
  addNewCard(cardNameInput.value, cardLinkInput.value)
    .then((cardData) => {
      const cardElement = createCard(cardData, userId, { handleDeleteClick, handleLikeClick, handleImageClick });
      cardList.prepend(cardElement);
      closeModal(addCardPopup);
      addCardForm.reset();
    })
    .catch((err) => console.error(`Ошибка при добавлении карточки: ${err}`))
    .finally(() => {
      addSaveButton.textContent = 'Сохранить'
    })
}); 

// Открытие попапа редактирования аватара
function openAvatarPopup() {
  clearValidation(avatarForm, validationConfig);
  openModal(avatarPopup);
}

// Обработчик аватара
profileAvatar.addEventListener('click', openAvatarPopup);

avatarForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  avatarSaveButton.textContent = 'Сохранение...';

  updateAvatar(avatarInput.value)
    .then((userData) => {
      profileAvatar.style.backgroundImage = `url(${userData.avatar})`;
      closeModal(avatarPopup);
      avatarForm.reset();
    })
    .catch((err) => console.error(`Ошибка при обновлении аватара: ${err}`))
    .finally(() => {
      avatarSaveButton.textContent = 'Сохранить';
    });
});


// Включение валидации
enableValidation(validationConfig);

// Загрузка данных пользователя и карточек
Promise.all([getUserInfo(), getInitialCards()])
  .then(([userData, cards]) => {
    userId = userData._id;
    profileName.textContent = userData.name;
    profileDescription.textContent = userData.about;
    profileAvatar.style.backgroundImage = `url(${userData.avatar})`;

    renderCards(cards);
  })
<<<<<<< HEAD
  .catch((err) => console.error(`Ошибка при загрузке данных: ${err}`));
=======
  .catch((err) => console.error(`Ошибка при загрузке данных: ${err}`));
>>>>>>> 54b4fcf7514e8e0383247dfb4975b3584ffe6c83
