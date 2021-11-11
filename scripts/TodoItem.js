class TodoItem {
  _title;
  _template;
  _view;

  constructor(title, template) {
    this._title = title;
    this._template = template;
  }

  _delClickHandler = () => {
    this._view.remove();
  }

  getView = () => {
    this._view = this._template.cloneNode(true).querySelector('.todo-item');
    this._view.querySelector('.todo-item__text').textContent = this._title;

    this._view.querySelector('.todo-item__del').addEventListener('click', this._delClickHandler);

    return this._view;
  }

}
