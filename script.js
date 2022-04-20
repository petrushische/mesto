const open = document.querySelector(".profile__button-edit");
const close = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");

let profile__title = document.querySelector(".profile__title");
let profile__subtitle = document.querySelector(".profile__subtitle");

let popup__input_name = document.querySelector('.popup__input-name');
let popup__input_text = document.querySelector(".popup__input-text");

let form = document.querySelector(".popup__container");
let submit = document.querySelector(".popup__save");



function popup_open_close() {
  popup.classList.toggle("popup_opened");
  popup__input_name.value = profile__title.textContent;
  popup__input_text.value = profile__subtitle.textContent;
}
open.addEventListener("click", popup_open_close);
close.addEventListener("click", popup_open_close);



function form_submit(evt) {
  evt.preventDefault();
  profile__title.textContent = popup__input_name.value;
  profile__subtitle.textContent = popup__input_text.value;
  popup.classList.toggle("popup_opened");
}

form.addEventListener("submit", form_submit);