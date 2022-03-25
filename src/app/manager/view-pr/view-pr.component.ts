import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reimbursement } from 'src/app/reimbursement/reimbursement.model';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-view-pr',
  templateUrl: './view-pr.component.html',
  styleUrls: ['./view-pr.component.css']
})

export class ViewPrComponent implements OnInit {

  pendingReimbursement: Reimbursement = {
    reimbursementId: 0,
    requestingEmployeeId: 0,
    reimbursementAmount: 0,
    reimbursementPending: true,
    dateOfRequest: "",
    reimbursementImage: ""
  }
  errorMessage: string = "";
  constructor(private managerService: ManagerService, private router: Router) { }

  ngOnInit(): void {
    
  }
  makeCall(){
    this.getRequest(this.pendingReimbursement.reimbursementId);
  }
  getRequest (reimbursementId: number): void{
      this.managerService.readPendingRequest(reimbursementId).subscribe( response => {
      console.log(response);
      this.pendingReimbursement.reimbursementId = response.reimbursementId;
      this.pendingReimbursement.requestingEmployeeId = response.requestingEmployeeId;
      this.pendingReimbursement.reimbursementAmount = response.reimbursementAmount;
      this.pendingReimbursement.dateOfRequest = response.dateOfRequest;
      this.pendingReimbursement.reimbursementImage = response.reimbursementImage.imageData;
      console.log(this.pendingReimbursement.reimbursementImage);
      
      if( this.pendingReimbursement.requestingEmployeeId == 0 ){
        // invalid credentials
        this.errorMessage = "Must be valid reimbursement ID";
      } else {
        // found in database
        this.errorMessage = "";
        
        console.log("readPendingRequest() was succesfull!");
      } 
  });
          
      
  }
}
