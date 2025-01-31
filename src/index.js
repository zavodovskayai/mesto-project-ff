import './pages/index.css'; // Импорт главного файла стилей
import { initialCards } from './scripts/cards.js'; // Карточки
import { createCard, likeCard, deleteCard } from './scripts/components/card.js'; // Работа с карточками
import { openModal, closeModal, closeModalOnOverlayClick, addCloseButtonHandler } from './scripts/components/modal.js'; // Функции для работы с окнами

// DOM узлы
const cardList = document.querySelector('.places__list'); // Контейнер для карточек

// DOM-элементы
const profileEditButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup_type_edit');
const profileForm = profilePopup.querySelector('.popup__form');
const nameInput = profileForm.querySelector('.popup__input_type_name');
const jobInput = profileForm.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const addCardButton = document.querySelector('.profile__add-button');
const addCardPopup = document.querySelector('.popup_type_new-card');
const addCardForm = addCardPopup.querySelector('.popup__form');
const cardNameInput = addCardForm.querySelector('.popup__input_type_card-name');
const cardLinkInput = addCardForm.querySelector('.popup__input_type_url');
const imagePopup = document.querySelector('.popup_type_image');
const popupImage = imagePopup.querySelector('.popup__image');
const popupCaption = imagePopup.querySelector('.popup__caption');

// Функция для обработки клика по изображению карточки
function handleImageClick(cardData) {
  popupImage.src = cardData.link;
  popupImage.alt = cardData.name;
  popupCaption.textContent = cardData.name;
  openModal(imagePopup);
}

// Рендеринг карточек
function renderCards() {
  initialCards.forEach((cardData) => {
    const cardElement = createCard(cardData, {
      likeCard,
      deleteCard,
      handleImageClick,
    });
    cardList.append(cardElement);
  });
}

// Открытие попапа редактирования профиля
profileEditButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(profilePopup);
});

// Закрытие попапа кликом на оверлей
closeModalOnOverlayClick(profilePopup);
closeModalOnOverlayClick(addCardPopup);
closeModalOnOverlayClick(imagePopup);

// Добавляем обработчики для кнопок закрытия
addCloseButtonHandler(profilePopup);
addCloseButtonHandler(addCardPopup);
addCloseButtonHandler(imagePopup);

// Обработчик отправки формы редактирования профиля
profileForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(profilePopup);
});

// Открытие попапа добавления карточки
addCardButton.addEventListener('click', () => {
  openModal(addCardPopup);
});

// Обработчик отправки формы добавления карточки
addCardForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const newCard = createCard(
    {
      name: cardNameInput.value,
      link: cardLinkInput.value,
    },
    {
      likeCard,
      deleteCard,
      handleImageClick,
    }
  );
  cardList.prepend(newCard); // Добавляем карточку в начало списка
  closeModal(addCardPopup);
  addCardForm.reset(); // Очищаем форму
});

// Рендерим карточки при загрузке страницы
renderCards();