import { Component, OnInit } from '@angular/core';
import {CourseService} from '..//course.service'
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
courseDetails
  constructor(private courseService:CourseService) { }

  ngOnInit() {
  }

  fetchCourseDetails()
  {
   this.courseDetails=this.courseService.getCourseDetails()

  }
}
