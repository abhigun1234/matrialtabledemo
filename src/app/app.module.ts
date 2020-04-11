import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseinfoComponent } from './courseinfo/courseinfo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourselistComponent } from './courselist/courselist.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { MatTableModule } from "@angular/material";
@NgModule({
  declarations: [
    AppComponent,
    CourseinfoComponent,
    CourselistComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
