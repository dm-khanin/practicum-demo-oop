const todos = [
  'Сделать проектную работу',
  'Полить цветы',
  'Пройти туториал по Реакту',
  'Сделать фронт для своего проекта',
  'Погулять с собакой',
  'Разобраться в замыканиях',
  'Решить задачу на Codewars'
];

const todosContainer = document.querySelector('.todos__list');
const todoTemplate = document.querySelector('#todo-item-template').content;
const addTodoForm = document.querySelector('.todo-form');

const renderTodo = (taskName) => {
  const todoElement = todoTemplate.cloneNode(true);
  const todoTextElement = todoElement.querySelector('.todo-item__text');
  todoTextElement.textContent = taskName;

  const todoDeleteBtn = todoElement.querySelector('.todo-item__del');
  todoDeleteBtn.addEventListener('click', (event) => {
    event.target.closest('.todo-item').remove();
  });

  const todoCloneBtn = todoElement.querySelector('.todo-item__copy');
  todoCloneBtn.addEventListener('click', () => {
    renderTodo(taskName);
  });

  const todoEditBtn = todoElement.querySelector('.todo-item__edit');
  todoEditBtn.addEventListener('click', (event) => {
    const input = addTodoForm.querySelector('.todo-form__input');
    input.value = taskName;

    const submitBtn = addTodoForm.querySelector('.todo-form__submit-btn');
    submitBtn.textContent = 'Изменить';
    addTodoForm.removeEventListener('submit', addTodo);

    const editTodo = (e) => {
      e.preventDefault();

      event.target.closest('.todo-item')
        .querySelector('.todo-item__text')
        .textContent = input.value;

      input.value = '';
      submitBtn.textContent = 'Добавить';

      addTodoForm.removeEventListener('submit', editTodo);
      addTodoForm.addEventListener('submit', addTodo);
    };

    addTodoForm.addEventListener('submit', editTodo);
  });

  todosContainer.append(todoElement);
};

todos.forEach(renderTodo);

const addTodo = (event) => {
  event.preventDefault();

  const input = event.target.querySelector('.todo-form__input');
  const taskName = input.value;

  renderTodo(taskName);

  input.value = '';
};

addTodoForm.addEventListener('submit', addTodo);
