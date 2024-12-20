import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  constructor(private router: Router, private sessionStorageService: SessionStorageService) { }

  canActivate(): boolean {
    const codigoAlumno = this.sessionStorageService.retrieve('codigoAlumno');
    if (codigoAlumno) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }
}