import { Injectable } from '@angular/core';
@Injectable()
export class LoginService {
    userData: any;
    userLogin(data) {
        this.userData = {
            role: data.role,
            name: data.userName
        };
        localStorage.setItem('data', JSON.stringify(this.userData));
        return localStorage.getItem('data');
    }

    getUserDetails() {
        return this.userData;
    }
}
