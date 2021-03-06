import { TodosModuleModule } from './todos-module/todos-module.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AllTodosService } from './all-todos.service';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { UsersService } from './users.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserModuleModule } from './user-module/user-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    UserModuleModule,
    TodosModuleModule,
    HttpModule
  ],
  providers: [AllTodosService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
