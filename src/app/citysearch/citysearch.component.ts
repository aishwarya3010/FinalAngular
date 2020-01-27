import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citysearch',
  templateUrl: './citysearch.component.html',
  styleUrls: ['./citysearch.component.css']
})
export class CitysearchComponent implements OnInit {

  constructor() {
    delete sessionStorage['city'];
   }

  ngOnInit() {
  }

}
