import { TodoComponent } from './../todo/todo.component';
import { TodosComponent } from './../todos/todos.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from '../users/users.component';
const routes: Routes = [
      {
        path:'',
        component:UsersComponent
      },
      {
        path:'users/:id',
        component: TodosComponent
      }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
