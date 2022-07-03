import './styles.css';
import { Todo, TodoList } from './classes';
// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class.js';

const todoList = new TodoList();

const tarea = new Todo('Aprender Javascript');
const tarea2 = new Todo('Comprar un unicornio');

todoList.nuevoTodo( tarea );
todoList.nuevoTodo( tarea2 );

console.log( todoList );