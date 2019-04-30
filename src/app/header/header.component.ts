import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../http/login.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['header.component.css']
})

export class HeaderComponent implements OnInit {
    loggedInDetails;
    subMenu = false;
    sideNavData;
    constructor(
        private router: Router,
        private service: LoginService
    ) { }

    ngOnInit() {
        this.loggedInDetails = JSON.parse(localStorage.getItem('data'));
        this.sideNavData = [
            {
                name: 'home',
                iconName: 'fa fa-fw fa-home right-padding'
            },
            {
                name: 'about-us',
                iconName: 'fa fa-fw fa-info-circle right-padding'
            },
            {
                name: 'student',
                iconName: 'fa fa-fw fa-child right-padding'
            },
            {
                name: 'preAdmission',
                iconName: 'fa fa-fw fa-envelope right-padding'
            },
            {
                name: 'employee',
                iconName: 'fa fa-fw fa-user right-padding'
            },
        ];
    }

    logout() {
        localStorage.removeItem('data');
        this.router.navigate(['/login']);
    }

    showSubMenu() {
        this.subMenu = !this.subMenu;
    }
}
