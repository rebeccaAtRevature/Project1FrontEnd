import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ehome',
  templateUrl: './ehome.component.html',
  styleUrls: ['./ehome.component.css']
})
export class EhomeComponent implements OnInit {

  role: string = "Employee"
  constructor() { }

  ngOnInit(): void {
  }

}
