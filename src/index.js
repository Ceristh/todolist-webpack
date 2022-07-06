import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes.js'
// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class.js';

export const todoList = new TodoList();

const tarea = new Todo('Aprender Javascript!!');

todoList.nuevoTodo( tarea );

tarea.completado = true;

console.log( todoList );

crearTodoHtml( tarea );