import { Component, OnInit } from '@angular/core';
import {CourseService} from '..//course.service'
@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  userDetails
  constructor(private courseService :CourseService) { }

  ngOnInit() {

    this.courseService.getusersDetails().subscribe(res=>{

      console.log("response",res);
      this.userDetails=res
      
    })
  }

}
