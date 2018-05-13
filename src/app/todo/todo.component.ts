import { AllTodosService } from './../all-todos.service';
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input('todo')
   todo: any;
  constructor(private todoService:AllTodosService) { }

  ngOnInit() {
  }
  removeTodo(){
    this.todoService.removeTodo(this.todo.id).subscribe(res => this.todo=null)
  }

}
