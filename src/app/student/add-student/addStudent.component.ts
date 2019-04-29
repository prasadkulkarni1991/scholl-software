import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-add-student',
    templateUrl: './addStudent.component.html'
})

export class AddStudentComponent implements OnInit {
    activeLink;
    constructor(
    ) { }

    ngOnInit() {
        this.activeLink = 'basicDetails';
    }
    checkActiveLink(link) {
        this.activeLink = link;
    }

}
