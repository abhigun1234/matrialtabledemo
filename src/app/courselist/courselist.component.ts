import { Component, OnInit } from '@angular/core';
import {CourseService} from '..//course.service'
@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
 courseDetails;
  constructor(private courseService:CourseService) { }

  ngOnInit() {
  }

  fetchCourseDetails()
  {

   this.courseDetails=this.courseService.getCourseDetails()

  }


}
