import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Person} from "../Person";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  public getPeople():Observable<Person[]>{
    return this.http.get<Person[]>("http://localhost:8080/")
  }
}
