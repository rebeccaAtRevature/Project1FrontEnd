import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reimbursement } from '../reimbursement/reimbursement.model';
import { Employee } from './empolyee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  submitRequest(reimbursement: FormData): Observable<Reimbursement>{
    return this.http.post<Reimbursement>(`http://localhost:4444/api/reimbursements`, reimbursement);
  }
  viewEmpPendingRequests(employeeId: number): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(`http://localhost:4444/api/p-reimbursements/${employeeId}`);
  }
  viewEmpResolvedRequests(employeeId: number): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(`http://localhost:4444/api/r-reimbursements/${employeeId}`);
  }
  viewEmployee(employeeId: number): Observable<Employee>{
    return this.http.get<Employee>(`http://localhost:4444/api/employees/${employeeId}`);
  }
  updateEmployee(employee: Employee): Observable<Employee>{
    return this.http.put<Employee>(`http://localhost:4444/api/employees`, employee);
  }
}
