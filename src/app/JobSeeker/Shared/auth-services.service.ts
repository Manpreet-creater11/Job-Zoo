import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor() { }

  setData(res:any){
    sessionStorage.setItem('token', res.email);
  }

  getToken(){
    return sessionStorage.getItem('token');
  }

  clear(){
    sessionStorage.clear();
  }
}
