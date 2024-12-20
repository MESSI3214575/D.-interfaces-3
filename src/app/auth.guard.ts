import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const codigo = sessionStorage.getItem('codigo');
    if (codigo) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }
}
