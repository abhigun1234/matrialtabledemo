import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class FetchcourseService {

  constructor(private _http:HttpClient) { }

  getCourseDetails()
  {

    return this._http.get("https://dronaonlineadmin.herokuapp.com/courses/")
  }
}
