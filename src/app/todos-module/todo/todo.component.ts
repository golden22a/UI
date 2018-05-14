import { AllTodosService } from '../../all-todos.service';
import { Component, OnInit,Input, Renderer2, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input('todo')
   todo: any;
   private title;
   modal:any;
   @ViewChild('input') input;

  constructor(private todoService:AllTodosService,private modalService: NgbModal,private rendrer : Renderer2) { }

  ngOnInit() {
    this.title=this.todo.title;
  }
  removeTodo(){
    this.todoService.removeTodo(this.todo.id).subscribe(res => this.todo=null)
  }
  open(content) {
   this.modal= this.modalService.open(content);
  }
  updateTodo(event){
    if((this.todo.title != this.title) && (this.title.length >= 5 
    ) && (event.code == "Enter")) {
      console.log('heeey')
    this.todoService.updateTodo(this.todo.id,this.title).subscribe(res =>{
    this.todo.title=this.title; 
    this.blurEvent();
  })
  }
  }
  dbClick(event){
    delete event.target.attributes[1];
    this.rendrer.removeAttribute(this.input.nativeElement,'disabled');
    this.input.nativeElement.focus();

}
blurEvent(){
  this.title=this.todo.title;
  this.rendrer.setAttribute(this.input.nativeElement,'disabled','disabled');
}
doneTodo(){
  this.todoService.doneTodo(this.todo).subscribe(res=>{
    this.todo=null;
  })
}
}
