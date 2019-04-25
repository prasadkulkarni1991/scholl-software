import { Injectable } from '@angular/core';
@Injectable()
export class LoginService {
    userData: any;
    userLogin(data) {
            return this.userData = {
                role: data.role,
                name: data.userName
            };
    }

    getUserDetails() {
        return this.userData;
    }
}
