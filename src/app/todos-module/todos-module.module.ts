import { TodosComponent } from './todos/todos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [TodoComponent,TodosComponent],
  exports: [TodoComponent,TodosComponent]

})
export class TodosModuleModule { }
