class TodoList {
  _container;
  _itemTemplate;
  _form;

  constructor(selector, formSelector, itemTemplate) {
    this._container = document.querySelector(selector);
    this._itemTemplate = itemTemplate;

    this._form = new TodoForm(formSelector, this.addTodo);
    this._form.init();
  }

  addTodo = (title) => {
    const item = new TodoItem(title, this._itemTemplate);
    const result = item.getView();
    this._container.append(result);
  }
}
