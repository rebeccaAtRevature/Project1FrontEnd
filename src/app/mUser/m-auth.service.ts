import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from '../manager/manager.model';

@Injectable({
  providedIn: 'root'
})
export class MAuthService {
  
  constructor() { }

  loggedIn: boolean = false;

  storeUser(manager: Manager): void{
    sessionStorage.setItem("managerInfo", JSON.stringify(manager));
  }

  retrieveUser(): Manager{
    let data: any = sessionStorage.getItem("managerInfo");
    return JSON.parse(data);
  }

  destroyUser(): void{
    sessionStorage.removeItem("managerInfo");
  }
}
