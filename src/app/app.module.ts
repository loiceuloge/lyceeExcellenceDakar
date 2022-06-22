import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { ClassesComponent } from './classes/classes.component';
import { FormsModule } from '@angular/forms';
import { ClassRoomComponent } from './class-room/class-room.component';

@NgModule({
  declarations: [AppComponent, StudentsComponent, ClassesComponent, ClassRoomComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
