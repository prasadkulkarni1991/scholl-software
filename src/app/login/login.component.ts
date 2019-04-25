import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../http/login.service';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {
    loginDetails;
    constructor(
        private router: Router,
        private service: LoginService
    ) { }

    login(f) {
        const data = {
            type: 'admin',
            userName: f.value.username,
            role: f.value.role
        };
        this.loginDetails = this.service.userLogin(data);
        this.router.navigate(['/dashboard']);

    }

    roleSelected(role) {
    }

}
