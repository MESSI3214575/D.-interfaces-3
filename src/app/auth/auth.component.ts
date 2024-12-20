import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  authForm: FormGroup;
  error = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.authForm = this.fb.group({
      codigo: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const { codigo, password } = this.authForm.value;
    if (codigo === 'sm76058274' && password === '24092005') {
      sessionStorage.setItem('codigo', codigo);
      this.router.navigate(['/main']);
    } else {
      this.error = 'Código o contraseña incorrectos';
    }
  }
}
