import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../http/login.service';

@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['header.component.css']
})

export class HeaderComponent implements OnInit {
    loggedinDetails;
    constructor(
        private router: Router,
        private service: LoginService
    ) { }

    ngOnInit() {
      this.loggedinDetails = this.service.getUserDetails();
    }

    logout() {
        this.router.navigate(['/login']);
    }
}
