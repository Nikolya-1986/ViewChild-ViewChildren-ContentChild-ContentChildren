import { AfterContentInit, Component, ContentChild, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { StudentHistoryComponent } from '../student-history/student-history.component';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit, AfterContentInit {

  @ContentChild(StudentHistoryComponent) studentHistory!: StudentHistoryComponent;
  @ContentChildren(StudentHistoryComponent) studentHistoryList!: QueryList<StudentHistoryComponent>;
  
  @Input() student:any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    setTimeout(() => {
      //this.studentHistory.history.year = 2020;

      this.studentHistoryList.toArray().forEach((student) => {
        student.history.year = 2019;
      });
    }, 1600);
  }


}
