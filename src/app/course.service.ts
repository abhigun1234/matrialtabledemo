import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
courseDetails=[{"name":"Angular","id":"1","description":"ui"},
  {"name":"React","id":"2","description":"ui"},
  {"name":"Node Js","id":"3","description":"ui"}
  ]
  constructor() { }

 public getCourseDetails()
 {

   return this.courseDetails;
 }
}
