import {Component, OnInit} from '@angular/core';
import {ApiService} from "./service/api.service";
import {Observable} from "rxjs";
import {Person} from "./Person";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DemoProject';
  public people:Observable<Person[]>|undefined
  constructor(private api:ApiService) {
  }
  ngOnInit(): void {
    this.people = this.api.getPeople();
    this.people.subscribe();
  }

}
