import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../api/auth.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private authService: AuthService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nombre: ['',Validators.compose([
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(150)
                  ])],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required]],
      // eslint-disable-next-line @typescript-eslint/naming-convention
      password_confirmation: ['',[Validators.required]]
    });
  }
  submitForm(){
    if(this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.authService.register(this.registerForm.value)
        .then((response) => {
          console.log(response);
          this.alerta(
            'Exito!',
            'Registro',
            'Registro correcto'
          );
        })
        .catch( (err) => {
          console.log(JSON.stringify(err.error.errors));
          this.alerta(
            'Registro',
            'Error de registro',
            'error'
          );
        });
    }
  }
  async alerta(titulo, subtitulo, mensaje) {
    const alert = await this.alertCtrl.create({
      header: titulo,
      subHeader: subtitulo,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

}
