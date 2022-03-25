import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EAuthService } from 'src/app/eUser/e-auth.service';
import { Reimbursement } from 'src/app/reimbursement/reimbursement.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-pr',
  templateUrl: './add-pr.component.html',
  styleUrls: ['./add-pr.component.css']
})
export class AddPrComponent implements OnInit {

  constructor(private eAuthService: EAuthService, private employeeService: EmployeeService, private router: Router) { }

  newReimbursement: Reimbursement = {
    reimbursementId: 0,
    requestingEmployeeId: this.eAuthService.retrieveUser().employeeId,
    reimbursementAmount: 0,
    reimbursementPending: true,
  }
  
  
  selectedFile?: any;
  currentFile?: any;
  fileInfos?: any;

  ngOnInit(): void {

  }

  addReimbursement(): void {

    // Create a FormData object
    let formData = new FormData();
    // Append the file to the FormData object 
    // file has been uploaded using an imput element of type 'file', therefore:
    formData.append('file', this.selectedFile, this.selectedFile.name );
    formData.append('properties',new Blob([JSON.stringify({
      "reimbursementId": String(this.newReimbursement.reimbursementId),
      "requestingEmployeeId": String(this.newReimbursement.requestingEmployeeId),
      "reimbursementAmount": String(this.newReimbursement.reimbursementAmount),
      "reimbursementPending": String(this.newReimbursement.reimbursementPending)})],
      { type: "application/json" }));

    this.employeeService.submitRequest(formData).subscribe( response => {
      console.log(response);
      this.newReimbursement.reimbursementId = response.reimbursementId;
      this.newReimbursement.requestingEmployeeId = response.requestingEmployeeId;
      this.newReimbursement.reimbursementAmount = response.reimbursementAmount;
      this.newReimbursement.dateOfRequest = response.dateOfRequest;
      
      this.router.navigate(['/eHome']);
    });
  }

  selectFile(event: any): void {
    console.log(event)
    this.selectedFile = event.target.files[0];
    
     
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) => {
      console.log(reader.result)
    }
  }  

}
