import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {RoutingModule} from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { FormsModule } from '@angular/forms';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { MySlicePipe } from './pipes/mySlice.pipe';
import { MyDatePipe } from './pipes/myDate.pipe';
import { MyArrPipe } from './pipes/myArr.pipe';
import {JoinPipe} from './pipes/join.pipe';
import { BgDirective } from './directives/bg.directive';
import { MyIfDirective } from './directives/my-if.directive';
import { MyLoopDirective } from './directives/my-loop.directive';
import { FiltersComponent } from './components/filters/filters.component';
import { MyStyleDirective } from './directives/my-style.directive';
import { MyClassDirective } from './directives/my-class.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    UserEditComponent,
    TodoEditComponent,
    TodoAddComponent,
    LoginComponent,
    SignupComponent,
    MySlicePipe,
    MyDatePipe,
    JoinPipe,
    BgDirective,
    MyIfDirective,
    MyLoopDirective,
    FiltersComponent,
    MyArrPipe,
    MyStyleDirective,
    MyClassDirective
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
