import { Component, OnInit } from '@angular/core';
import {CourseService} from '..//course.service'
@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
 courseDetails;
 data:any;
  constructor(private courseService:CourseService) { }

  ngOnInit() {
  }

  fetchCourseDetails()
  {

   this.courseDetails=this.courseService.getCourseDetails()

  }

  reciveDataFromcomponent()
  {
   this.data=this.courseService.getData()

  }


}
