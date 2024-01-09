import { ToDo } from "./toDo";

export interface User{
  _id: string,
  nome: string,
  email: string,
  toDoList: ToDo[],
}
