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

function popupOpened(popup) {
  popup.classList.add("popup__opened");
}

function popupClose(popup) {
  popup.classList.remove("popup__opened");
}




popupChangeOpen.addEventListener("click", open = () => {
  popupOpened(popupNamechange);
  editing()
});

popupChangeClose.addEventListener("click", cloze = () => {
  popupClose(popupNamechange);
});



function formNameChangeSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupInputName.value;
  profileSubtitle.textContent = popupInputText.value;
  popupClose(popupNamechange);
}

formNameChange.addEventListener("submit", formNameChangeSubmit);


// спринт 5
// открытие и закрытие popup
const popupCardsAdd = document.querySelector(".popup_cards_add");
const popupCloseCardsAdd = document.querySelector(".popup__close_cards_add");
const buttonCardsAdd = document.querySelector(".profile__button-add");


buttonCardsAdd.addEventListener("click", open = () => {
  popupOpened(popupCardsAdd);
});
popupCloseCardsAdd.addEventListener("click", cloze = () => {
  popupClose(popupCardsAdd);
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

// Закрытие большого попапа  Этот попап не трогал так как он единственный и для него используется другой класс
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
    link: inputCardsAddLink.value
  }, containerForCard);

  inputCardsAddName.value = "";
  inputCardsAddLink.value = "";
  popupClose(popupCardsAdd);
}
formCardsAdd.addEventListener("submit", buttunSubmitCardsAdd);