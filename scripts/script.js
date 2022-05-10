const open = document.querySelector(".profile__button-edit");
const close = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");

let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");

let popupInputName = document.querySelector('.popup__input_type_name');
let popupInputText = document.querySelector(".popup__input_type_text");

let form = document.querySelector(".popup__container");
/*let submit = document.querySelector(".popup__save");*/



function popupToggle() {
  popup.classList.toggle("popup_opened");
  if (popup.classList.contains("popup_opened")) {
    popupInputName.value = profileTitle.textContent;
    popupInputText.value = profileSubtitle.textContent;
  }
}

open.addEventListener("click", popupToggle);
close.addEventListener("click", popupToggle);



function formSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupInputName.value;
  profileSubtitle.textContent = popupInputText.value;
  popupToggle();
}

form.addEventListener("submit", formSubmit);


// спринт 5
//добавил карточки
const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popupCardsAdd = document.querySelector(".popup_cards_add");
const popupCloseCardsAdd = document.querySelector(".popop__close_cards_add");
const formCardsAdd = document.querySelector(".profile__button-add");

function popupAddCardsToggle() {
  popupCardsAdd.classList.toggle("popup_opened");
}
formCardsAdd.addEventListener("click", popupAddCardsToggle);
popupCloseCardsAdd.addEventListener("click", popupAddCardsToggle);