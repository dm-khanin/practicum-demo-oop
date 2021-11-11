const todos = [
  'Сделать проектную работу',
  'Полить цветы',
  'Пройти туториал по Реакту',
  'Сделать фронт для своего проекта',
  'Погулять с собакой',
  'Разобраться в замыканиях',
  'Решить задачу на Codewars'
];

const todoTemplate = document.querySelector('#todo-item-template').content;

const todoList = new TodoList(
  '.todos__list',
  '.todo-form',
  todoTemplate,
);

todos.forEach(title => {
  todoList.addTodo(title);
});
