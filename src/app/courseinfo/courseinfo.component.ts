import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {CourseService} from '..//course.service'
@Component({
  selector: 'app-courseinfo',
  templateUrl: './courseinfo.component.html',
  styleUrls: ['./courseinfo.component.css']
})
export class CourseinfoComponent implements OnInit {
// displayedColumns: string[] = ['name','id'];
//   PeriodicElement= [
//   { name: 'Hydrogen',id:'1'},
// ];
  dataSource = new MatTableDataSource()
  constructor(private courseService :CourseService) { }

  ngOnInit() {
     //this.dataSource=this.PeriodicElement
  }
  sendData(data:any)
  {
// send data to course list component
    this.courseService.setData(data)

  }

}
