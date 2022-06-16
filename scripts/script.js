const popupChangeOpen = document.querySelector(".profile__button-edit");
const popupChangeClose = document.querySelector(".popup__close");
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



function openPopup(popup) {
  popup.classList.add("popup__opened");

}


function closePopup(popup) {
  popup.classList.remove("popup__opened");
}


popupChangeOpen.addEventListener("click", open = () => {
  openPopup(popupNamechange);
  editing();
});

popupChangeClose.addEventListener("click", cloze = () => {
  closePopup(popupNamechange);
});



function formNameChangeSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupInputName.value;
  profileSubtitle.textContent = popupInputText.value;
  closePopup(popupNamechange);
}

formNameChange.addEventListener("submit", formNameChangeSubmit);


// спринт 5
// открытие и закрытие popup
const popupCardsAdd = document.querySelector(".popup_cards_add");
const popupCloseCardsAdd = document.querySelector(".popup__close_cards_add");
const buttonCardsAdd = document.querySelector(".profile__button-add");



buttonCardsAdd.addEventListener("click", open = () => {
  openPopup(popupCardsAdd);

});
popupCloseCardsAdd.addEventListener("click", cloze = () => {
  closePopup(popupCardsAdd);
});


//добавил карточки

// вытаскивание в DOM

//контейнер
const containerForCard = document.querySelector(".foto-grid__elements");
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



bigClose.addEventListener("click", close = () => {
  closePopup(bigPopUp);
})




// template 
const templateCard = document.querySelector("#template-card").content.querySelector(".foto-grid__element");

// рендер template
const renderTemplateCard = (item) => {
  const cloneCard = templateCard.cloneNode(true);
  //фото и название
  const fotoCard = cloneCard.querySelector(".foto-grid__foto");



  fotoCard.addEventListener("click", open = () => {
    openPopup(bigPopUp);
    bigFoto.src = fotoCard.src;
    bigFoto.alt = fotoCard.alt;
    bigTitle.textContent = titlCard.textContent;
  });


  const titlCard = cloneCard.querySelector(".foto-grid__title-text");
  fotoCard.src = item.link;
  fotoCard.alt = item.alt;
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


function renderingCard(item, containerForCard) {

  containerForCard.prepend(renderTemplateCard(item));

}
initialCards.forEach((item) => {
  renderingCard(item, containerForCard);
});




// Работа с кнопкой submit
const buttunSubmitCardsAdd = (evt) => {
  evt.preventDefault();

  renderingCard({
    name: inputCardsAddName.value,
    link: inputCardsAddLink.value,
    alt: "Добавленная вами картинка"
  }, containerForCard);

  inputCardsAddName.value = "";
  inputCardsAddLink.value = "";
  closePopup(popupCardsAdd);
}
formCardsAdd.addEventListener("submit", buttunSubmitCardsAdd);





// спринт 6
const keyHandler = (evt) => {
  if (evt.key === 'Escape') {
    const popupActive = document.querySelector('.popup__opened');
    closePopup(popupActive);

  }
}

document.addEventListener("keydown", keyHandler);

// 
const popupList = document.querySelectorAll(".popup");
popupList.forEach((item) => {
  item.addEventListener("click", (evt) => {
    const comPopup = evt.target.closest('.popup');
    if (evt.target === evt.currentTarget) {
      closePopup(comPopup);
    }
  })
})