import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  constructor(public formBuilder: FormBuilder) {}

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
      password_confirm: ['',[Validators.required]]
    });
  }
  submitForm(){
    console.log(this.registerForm.valid);
    console.log(this.registerForm.value);
    console.log(environment.apiUrl);
  }

}
