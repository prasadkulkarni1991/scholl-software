import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable()

export class StudentService {
    constructor(
        private http: HttpClient
    ) { }


    getStudentList(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/users')
            .pipe(
                map((response) => {
                    return response;
                })
            );
    }
}
