import {Component, OnInit} from '@angular/core';
import { AuthService } from './api/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  estaAuntentificado: boolean;
  constructor(
    private authService: AuthService,
    private storage: Storage
  ) {}

  async ngOnInit() {
    await this.storage.create();
    this.revisarAutentificacion();
  }
  async revisarAutentificacion() {
    try {
      this.estaAuntentificado = await this.authService.revisarAutentificacion();
      console.log(this.estaAuntentificado);
    }
    catch {}
  }
}
