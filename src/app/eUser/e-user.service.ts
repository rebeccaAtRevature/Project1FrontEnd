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
    let employee = this.http.get<Employee>(`http://ec2-3-83-47-123.compute-1.amazonaws.com:9999/${newEUser.username}/${newEUser.password}`);
   
    return employee;
  }
}
