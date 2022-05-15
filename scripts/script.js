const popupOpen = document.querySelector(".profile__button-edit");
const popupClose = document.querySelector(".popup__close");
const popupNamechange = document.querySelector(".popup");

const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

const popupInputName = document.querySelector('.popup__input_type_name');
const popupInputText = document.querySelector(".popup__input_type_text");

const formNameChange = document.querySelector(".popup__container");

function editing() {
  popupInputName.value = profileTitle.textContent;
  popupInputText.value = profileSubtitle.textContent;
}

function open() {
  popupNamechange.classList.add("popup__opened");
  editing();
}

function close() {
  popupNamechange.classList.remove("popup__opened");
}


popupOpen.addEventListener("click", open);
popupClose.addEventListener("click", close);



function formNameChangeSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupInputName.value;
  profileSubtitle.textContent = popupInputText.value;
  close();
}

formNameChange.addEventListener("submit", formNameChangeSubmit);


// спринт 5
// открытие и закрытие popup
const popupCardsAdd = document.querySelector(".popup_cards_add");
const popupCloseCardsAdd = document.querySelector(".popup__close_cards_add");
const buttonCardsAdd = document.querySelector(".profile__button-add");

function popupAddCardsToggle() {
  popupCardsAdd.classList.toggle("popup__opened");
}
buttonCardsAdd.addEventListener("click", popupAddCardsToggle);
popupCloseCardsAdd.addEventListener("click", popupAddCardsToggle);


//добавил карточки
const initialCards = [{
    name: 'Карачаевск',
    link: '../images/Замок.png'
  },
  {
    name: 'Гора Эльбрус',
    link: '../images/Эльбрус.png'
  },
  {
    name: 'Домбай',
    link: '../images/Домбай.png'
  },
  {
    name: 'Гора Эльбрус',
    link: '../images/Эльбрус.png'
  },
  {
    name: 'Домбай',
    link: '../images/Домбай.png'
  },
  {
    name: 'Карачаевск',
    link: '../images/Замок.png'
  }
];
// вытаскивание в DOM

//контейнер

// форма
const formCardsAdd = document.querySelector(".popup__container-cards-add");
//поля формы
const inputCardsAddName = formCardsAdd.querySelector(".popup__input-cards-add-name");
const inputCardsAddLink = formCardsAdd.querySelector(".popup__input-cards-add-link");


// Попап для большой картинки
const bigPopUp = document.querySelector(".popup-sprint-five");
const bigClose = bigPopUp.querySelector(".popup-sprint-five__button");
const bigFoto = bigPopUp.querySelector(".popup-sprint-five__foto");
const bigTitle = bigPopUp.querySelector(".popup-sprint-five__text");

// Закрытие большого попапа
bigClose.addEventListener("click", () => {
  bigPopUp.classList.remove("popup-sprint-five__opened");
})



// template 
const templateCard = document.querySelector("#template-card").content.querySelector(".foto-grid__element");

// рендер template
const renderTemplateCard = (item) => {
  const cloneCard = templateCard.cloneNode(true);
  //фото и название
  const fotoCard = cloneCard.querySelector(".foto-grid__foto");

  function openBigPopUp() {
    bigPopUp.classList.add("popup-sprint-five__opened");
    bigFoto.src = fotoCard.src;
    bigTitle.textContent = titlCard.textContent;
  }
  fotoCard.addEventListener("click", openBigPopUp);



  const titlCard = cloneCard.querySelector(".foto-grid__title-text");
  fotoCard.src = item.link;
  titlCard.textContent = item.name;

  // лайк
  const likeButton = cloneCard.querySelector(".foto-grid__button");
  likeButton.addEventListener("click", (evt) => {
    const eventTargetLikeButton = evt.target;
    eventTargetLikeButton.classList.toggle("foro-grid__button_type_active");
  });

  // удалить
  const deleteButton = cloneCard.querySelector(".foto-grid__trash");
  deleteButton.addEventListener("click", (evt) => {
    const eventTargetTrashButton = evt.target;
    const formRemove = eventTargetTrashButton.closest(".foto-grid__element");
    formRemove.remove();
  })
  return cloneCard;
}
// пробежаться по массиву


// Прошу уточнить этот комментарий, не понял что вы имели ввиду, сделал так,
function renderingCard(item, ContainerForCard) {
  ContainerForCard = document.querySelector(".foto-grid__elements");
  ContainerForCard.prepend(renderTemplateCard(item));

}
initialCards.forEach((item) => {
  renderingCard(item);
});




// Работа с кнопкой submit
const buttunSubmitCardsAdd = (evt) => {
  evt.preventDefault();

  renderingCard({
    name: inputCardsAddName.value,
    link: inputCardsAddLink.value
  });

  inputCardsAddName.value = "";
  inputCardsAddLink.value = "";
  popupAddCardsToggle();
}
formCardsAdd.addEventListener("submit", buttunSubmitCardsAdd);