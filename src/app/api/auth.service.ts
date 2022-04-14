import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) {}
  register(datosRegistro: any){
    return this.http.post(`${environment.apiUrl}/register`, datosRegistro).toPromise();
  }
  login(datosLogin: any){
    return this.http.post(`${environment.apiUrl}/login`, datosLogin).toPromise();
  }
}
