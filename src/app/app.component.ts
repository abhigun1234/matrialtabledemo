import { Component ,OnInit} from '@angular/core';
import {CourseService} from './course.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'matrialtabledemo';
  courseDetails
  dataSource
  displayedColumns = ["Id", "name", "fees"];
  studentDetails
  constructor(private courseService:CourseService)
  {

  }
  ngOnInit() {
    //this.dataSource=this.PeriodicElement
    // this.courseService.getCourseDetails().subscribe(res=>{

    //   console.log("response",res)
    //   this.courseDetails=res
    //   this.dataSource=this.courseDetails['courseDetails']
    //   console.log(this.dataSource)
    // })
    // this.courseService.callDummyApi().subscribe(res=>{

    //   console.log("res",res)
    //   this.studentDetails=res
    // })
 }
}
