import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-courseinfo',
  templateUrl: './courseinfo.component.html',
  styleUrls: ['./courseinfo.component.css']
})
export class CourseinfoComponent implements OnInit {
displayedColumns: string[] = ['name', 'price', 'description', 'category'];
  dataSource = new MatTableDataSource()
  constructor() { }

  ngOnInit() {
  }

}
