import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}
  register(datosRegistro: any){
    return this.http.post(`${environment.apiUrl}/api/register`, datosRegistro).toPromise();
  }
  login(datosLogin){
    return this.http.post(`${environment.apiUrl}/api/login`, datosLogin).toPromise();
  }
}
