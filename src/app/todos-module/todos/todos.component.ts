import { Component, OnInit } from '@angular/core';
import {AllTodosService} from '../../all-todos.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  private todos;
  private title = "";
  private user_id;
  constructor(private todosService: AllTodosService,private route:ActivatedRoute) { 
  }

  ngOnInit() {
    this.route.params.forEach(x=>{
      this.user_id=x.id;
      this.todosService.getAll(x.id).subscribe( res => this.todos=res.json());
    })
  }
  addTodo(){
    this.todosService.addTodo(this.title,this.user_id).subscribe(res=>{
      this.todos.push(res.json());
      this.title="";
    })
    
  }
  onEnter(event){
    if(event.code == "Enter" && this.title.length >=5){
      this.addTodo();
    }
  }

}
