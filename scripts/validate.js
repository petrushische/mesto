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
      button.disabled = true;
    } else {
      // иначе сделай кнопку активной
      button.classList.remove(`${option.inactiveButtonClass}`);
      button.disabled = false;
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

  const formList = Array.from(document.querySelectorAll(`${option.formSelector}`));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  })


  function validatePopupForm(popup, option) {
    const inputList = Array.from(popup.querySelectorAll(option.inputSelector));
    const buttonElement = popup.querySelector(option.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, option);
    inputList.forEach((inputElement) => {
      hideInputError(inputElement, option);
    })
  }


}
// дизэйбл кнопки
function disabledButton(option, form) {
  const button = form.querySelector(option.submitButtonSelector);
  button.classList.add(option.inactiveButtonClass);
  button.setAttribute('disabled', true);
}
// cброс ошибок полей ввода 
const resetInputError = (option, popup) => {
  const inputList = Array.from(popup.querySelectorAll(option.inputSelector));
  inputList.forEach((item) => {
    item.classList.remove(option.inputErrorClass);
    const span = popup.querySelector(`.${item.id}-error`);
    span.classList.remove(option.errorClassVisible);
    span.textContent = '';
  })
}

enableValidation(settings);