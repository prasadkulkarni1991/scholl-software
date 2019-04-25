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
    constructor(
        private router: Router,
        private service: LoginService
    ) { }

    ngOnInit() {
        this.loggedInDetails = JSON.parse(localStorage.getItem('data'));
    }

    logout() {
        localStorage.removeItem('data');
        this.router.navigate(['/login']);
    }

    showSubMenu() {
        this.subMenu = !this.subMenu;
    }
}
