import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  mydata:any
courseDetails=[{"name":"Angular","id":"1","description":"ui"},
  {"name":"React","id":"2","description":"ui"},
  {"name":"Node Js","id":"3","description":"ui"}
  ]//https://github.com/abhigun1234/matrialtabledemo.git
  constructor() { }

 public getCourseDetails()
 {

   return this.courseDetails;
 }
 public setData(data:any)
 { console.log("data",data)
   this.mydata=data

 }
 public getData()
 {

  return this.mydata
 }
}
