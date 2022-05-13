const open = document.querySelector(".profile__button-edit");
const close = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");

let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");

let popupInputName = document.querySelector('.popup__input_type_name');
let popupInputText = document.querySelector(".popup__input_type_text");

let form = document.querySelector(".popup__container");




function popupToggle() {
  popup.classList.toggle("popup__opened");
  if (popup.classList.contains("popup__opened")) {
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
// открытие и закрытие popup
const popupCardsAdd = document.querySelector(".popup_type_cards-add");
const popupCloseCardsAdd = document.querySelector(".popop__close_type_cards-add");
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
const ContainerForCard = document.querySelector(".foto-grid__elements");
// форма
const formCardsAdd = document.querySelector(".popup__container_type_cards-add");
//поля формы
const inputCardsAddName = formCardsAdd.querySelector(".popup__input_type_cards-add-name");
const inputCardsAddLink = formCardsAdd.querySelector(".popup__input_type_cards-add-link");

// Попап для большой картинки
const bigPopUp = document.querySelector(".popup-sprint-five");
const bigClose = bigPopUp.querySelector(".popup-sprint-five__button");
const bigFoto = bigPopUp.querySelector(".popup-sprint-five__foto");
const bigTitle = bigPopUp.querySelector(".popup-sprint-five__text");



// template 
const templateCard = document.querySelector("#template-card").content.querySelector(".foto-grid__element");

// рендер template
const renderTemplateCard = (item) => {
  const cloneCard = templateCard.cloneNode(true);
  //фото и название
  const fotoCard = cloneCard.querySelector(".foto-grid__foto");

  function toggleBigPopUp() {
    bigPopUp.classList.toggle("popup-sprint-five__opened");
    bigFoto.src = fotoCard.src;
    bigTitle.textContent = titlCard.textContent;
  }
  fotoCard.addEventListener("click", toggleBigPopUp);
  bigClose.addEventListener("click", () => {
    bigPopUp.classList.remove("popup-sprint-five__opened");
  })


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
function renderingCard(item) {
  ContainerForCard.prepend(renderTemplateCard(item));

}
initialCards.forEach((item) => {
  renderingCard(item);
});




// Работа с кнопкой submit
const buttunSubmitCardsAdd = (evt) => {
  evt.preventDefault();
  if ((inputCardsAddName.value === "") && (inputCardsAddLink.value === "")) {
    console.log(undefined);
  } else {
    renderingCard({
      name: inputCardsAddName.value,
      link: inputCardsAddLink.value
    });
  }

  inputCardsAddName.value = "";
  inputCardsAddLink.value = "";
  popupAddCardsToggle();
}
formCardsAdd.addEventListener("submit", buttunSubmitCardsAdd);