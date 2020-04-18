import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  mydata:any

  constructor(private _httpClient:HttpClient) { }

 public getCourseDetails()
 {

   

   return this._httpClient.get('https://dronaonlineadmin.herokuapp.com/courses/')
 }
 public setData(data:any)
 { console.log("data",data)
   this.mydata=data

 }
 public getData()
 {

  return this.mydata
 }
 public callDummyApi()
 {
   return this._httpClient.get("http://127.0.0.1:3000/hello")
 }
//get users details
getusersDetails()
{

  return this._httpClient.get("http://127.0.0.1:3000/getUserDetails")
}


}
