import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ThrowStmt } from '@angular/compiler';
@Injectable()
export class AllTodosService {
  constructor(private http:Http) { }

  getAll(id){
    return this.http.get(`/api/todos/user/${id}`);
  }
  addTodo(title,id){
    return this.http.post(`/api/todos/`,{
      'title':title,
      'user_id':id
    });
  }
  removeTodo(id){
    return this.http.delete(`/api/todos/${id}`);
  }
  updateTodo(id,title){
    return this.http.patch(`/api/todos/${id}`,{
    "title":title
    });
  }
  doneTodo(todo){
    return this.http.patch(`/api/todos/${todo.id}`,{
      "title":todo.title,
      "done":true
      }); 
  }
}
  
