import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee/empolyee.model';
import { EAuthService } from './e-auth.service';
import { EUser } from './e-user.model';

@Injectable({
  providedIn: 'root'
})
export class EUserService {

  constructor(private http: HttpClient, private eAuthService: EAuthService) { }

  validateEUser(newEUser: EUser): Observable<Employee>{
    // Make http get request
    let employee = this.http.get<Employee>(`http://localhost:4444/api/${newEUser.username}/${newEUser.password}`);
   
    return employee;
  }
}
