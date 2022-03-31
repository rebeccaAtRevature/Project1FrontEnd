import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee/empolyee.model';
import { Reimbursement } from '../reimbursement/reimbursement.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient) { }

  readPendingRequest(reimbursementId: number): Observable<Reimbursement>{
    return this.http.get<Reimbursement>(`http://localhost:4444/api/p-reimbursement/${reimbursementId}`);
  }
  approveOrDeny(reimbursement: Reimbursement): Observable<Reimbursement>{
    return this.http.patch<Reimbursement>(`http://localhost:4444/api/reimbursement`, reimbursement);
  }
  viewAllPendingRequests(): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(`http://localhost:4444/api/p-reimbursements`);
  }
  viewAllResolvedRequests(): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(`http://localhost:4444/api/r-reimbursements`);
  }
  viewAllRequests(employeeId: number): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(`http://localhost:4444/api/reimbursements/${employeeId}`);
  }
  viewAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`http://localhost:4444/api/employees`);
  }

}
