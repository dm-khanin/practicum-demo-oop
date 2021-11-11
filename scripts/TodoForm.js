class TodoForm {
  _container;
  _onSubmit

  constructor(selector, onSubmit) {
    this._container = document.querySelector(selector);
    this._onSubmit = onSubmit;
  }

  _submitHandler = (evt) => {
    evt.preventDefault();
    const input = this._container.querySelector('.todo-form__input');
    this._onSubmit(input.value);
    input.value = '';
  }

  init = () => {
    this._container.addEventListener('submit', this._submitHandler);
  }
}
