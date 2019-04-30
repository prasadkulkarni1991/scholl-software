import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/http/student.service';

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['student-list.component.css']
})

export class StudentListComponent implements OnInit {
    constructor(
        private studentService: StudentService
    ) {

    }

    studentList;

    ngOnInit() {
        this.studentService.getStudentList()
            .subscribe((response) => {
                this.studentList = response;
            });
    }

}
