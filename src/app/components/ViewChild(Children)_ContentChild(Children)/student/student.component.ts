import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { StudentDetailComponent } from '../student-detail/student-detail.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  providers: [StudentService],
})
export class StudentComponent implements OnInit, AfterViewInit {

  @ViewChild(StudentDetailComponent) studentDetail!: StudentDetailComponent;
  @ViewChildren(StudentDetailComponent) studentDetailList!: QueryList<StudentDetailComponent>;

  public students: any[] = [];

  constructor(
    private _httpClient: HttpClient,
    private _studentService: StudentService
  ) { }

  ngOnInit(): void {
    this._getStudent();
  }

  private _getStudent(): any[] {
    this.students = this._studentService.getStudents();
    return this.students;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      // this.studentDetail.student.name = 'Rajesh';
      this.studentDetailList.toArray().forEach((result) => {
        result.student.grade = 12;
      });
    }, 2600);
    console.log(this.studentDetailList.first);
  }

}
 