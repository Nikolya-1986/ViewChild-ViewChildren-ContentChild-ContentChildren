import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './components/ViewChild(Children)_ContentChild(Children)/message/message.component';
import { MessageListComponent } from './components/ViewChild(Children)_ContentChild(Children)/message-list/message-list.component';
import { StudentComponent } from './components/ViewChild(Children)_ContentChild(Children)/student/student.component';
import { StudentDetailComponent } from './components/ViewChild(Children)_ContentChild(Children)/student-detail/student-detail.component';
import { StudentHistoryComponent } from './components/ViewChild(Children)_ContentChild(Children)/student-history/student-history.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessageListComponent,
    StudentComponent,
    StudentDetailComponent,
    StudentHistoryComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
