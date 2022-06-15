const settings = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  inputErrorClass: 'popup__input_type_error',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  errorClassVisible: 'popup__error_visible'
};


function enableValidation(option) {
  /* const formElement = document.querySelector(option.formSelector);
   const inputElement = formElement.querySelector(option.inputSelector);*/


  const showInputError = (form, input, errorMessage) => {
    const span = form.querySelector(`.${input.id}-error`);
    input.classList.add(option.inputErrorClass);
    span.textContent = errorMessage;
    span.classList.add(option.errorClassVisible);
  };

  const hideInputError = (form, input) => {
    const span = form.querySelector(`.${input.id}-error`);
    input.classList.remove(option.inputErrorClass);
    span.classList.remove(option.errorClassVisible);
    span.textContent = '';
  };
  const checkInputValidity = (form, input) => {
    if (!input.validity.valid) {
      showInputError(form, input, input.validationMessage);
    } else {
      hideInputError(form, input);
    }
  };

  const hasInvalidInput = (inputList) => {
    // проходим по этому массиву методом some
    return inputList.some((inputElement) => {
      // Если поле не валидно, колбэк вернёт true
      // Обход массива прекратится и вся функция
      // hasInvalidInput вернёт true

      return !inputElement.validity.valid;
    })
  };

  const toggleButtonState = (inputList, button) => {
    // Если есть хотя бы один невалидный инпут
    if (hasInvalidInput(inputList)) {
      // сделай кнопку неактивной
      button.classList.add(`${option.inactiveButtonClass}`);
    } else {
      // иначе сделай кнопку активной
      button.classList.remove(`${option.inactiveButtonClass}`);
    }
  };


  const setEventListeners = (form) => {
    const inputList = Array.from(form.querySelectorAll(`${option.inputSelector}`));
    const button = form.querySelector(`${option.submitButtonSelector}`);
    toggleButtonState(inputList, button);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(form, inputElement);
        toggleButtonState(inputList, button);
      });
    });
  };

  const validForm = () => {
    const formList = Array.from(document.querySelectorAll(`${option.formSelector}`));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement);
    });
  }
  validForm();



}

enableValidation(settings);
/*
const formElement = document.querySelector('.popup__container');
const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
console.log(inputList);







/*const input = document.querySelector(".popup__input");
const span = document.querySelector(`.${input.id}-error`);
console.log(span);



























































/*enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});*/