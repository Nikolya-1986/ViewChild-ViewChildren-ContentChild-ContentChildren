import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-history',
  templateUrl: './student-history.component.html',
  styleUrls: ['./student-history.component.scss']
})
export class StudentHistoryComponent implements OnInit {

  @Input() history: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
