import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {CourseService} from '..//course.service'
import {FetchcourseService} from '..//fetchcourse.service'
@Component({
  selector: 'app-courseinfo',
  templateUrl: './courseinfo.component.html',
  styleUrls: ['./courseinfo.component.css'],
})
export class CourseinfoComponent implements OnInit {

  dataSource = new MatTableDataSource()
  courseDetails;
  courseList;
  constructor(private fetchcourse:FetchcourseService) { }

  ngOnInit() {
    this.courseDetails=this.fetchcourse.getCourseDetails().subscribe(res=>{
      console.log("response",res)
      this.courseList=res['courseDetails']
      console.log("courseList",this.courseList)
    })
  }
 
}
