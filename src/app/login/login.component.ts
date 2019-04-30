import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../http/login.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
    loginDetails;
    loginForm: FormGroup;
    userName: FormControl;
    password: FormControl;
    role: FormControl;
    constructor(
        private router: Router,
        private service: LoginService,
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        this.loginForm = this.fb.group({
            userName: ['', Validators.required],
            password: ['', Validators.required],
            role: ['', Validators.required],
        });
    }

    login(form) {
        const data = {
            type: form.controls['password'].value,
            userName: form.controls['userName'].value,
            role: form.controls['role'].value,
        };
        this.loginDetails = this.service.userLogin(data);
        this.router.navigate(['/dashboard']);

    }

    roleSelected(role) {
    }

}
