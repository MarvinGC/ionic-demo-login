import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private router: Router,
  ) {}
  async revisarAutentificacion() {
    const now = Date.now();
    const auth: any = await this.storage.get('auth');
    console.log(auth);
    // if (!!!auth) {
    //   return false;
    // }
    // if (auth !== null) {
    //   // let token: string = '';
    //   // token = auth.expired_at;
    //   // let token1 = token.substring(0, 10);
    //   // let token2 = token.substring(11, 19);
    //   // let tokenF = token1 + 'T' + token2;
    //   // let tokenFD = new Date(tokenF);
    //   // let tokenMS = tokenFD.valueOf();
    //   // if (now >= tokenMS) {
    //   //   (async () => {
    //   //     const alert = await this.alertController.create({
    //   //       cssClass: 'my-custom-class',
    //   //       header: 'AVISO',
    //   //       subHeader: 'Mensaje importante',
    //   //       message: 'Lo sentimos, la sesión ha expirado',
    //   //       buttons: ['OK']
    //   //     });
    //   //     await alert.present();
    //   //   })();
    //   //   this.removerCredenciales();
    //   //   return false;
    //   // }
    // }
    return true;
  }
  removerCredenciales() {
    this.storage.remove('auth');
    this.router.navigate(['login']);
  }
  guardarCredenciales(response: any) {
    this.storage.set('auth', {
      access_token: response.access_token,
      refresh_token: response.refresh_token,
      expired_at: response.expires_in
    });
  }
  register(datosRegistro: any){
    return this.http.post(`${environment.apiUrl}/register`, datosRegistro).toPromise();
  }
  login(datosLogin: any){
    return this.http.post(`${environment.apiUrl}/login`, datosLogin).toPromise();
  }
}
