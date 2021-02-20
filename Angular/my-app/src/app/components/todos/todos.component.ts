import { Component, OnInit } from '@angular/core';
import {Todo} from './../../modules/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  inputToDo:string;
  constructor() {
    this.todos = [];

    this.inputToDo="";
   }

  ngOnInit(): void {
    this.todos = [
      {
        content: "first task",
        completed: false
      },
      {
        content: "second task",
        completed: true
      }
    ];
  }

  toggleDone(id:number): void{
    // this.todos[id].completed = !this.todos[id].completed;
    this.todos.map((v:Todo, i:number) => {
      if(id === i) v.completed = !v.completed;
      return v;
    })
  }

  deleteTodo(id:number){
    this.todos = this.todos.filter( (todo, i) => i !== id);
  }
  addTodo(){
    if (this.inputToDo !== '') {
      this.todos.push(
        {
          content: this.inputToDo,
          completed: false
        }
      );
    }
    this.inputToDo = '';
  }
}
