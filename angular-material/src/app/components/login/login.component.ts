import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;
  loading: boolean = false; // Para controlar el spinner

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  login() {
    const usuario = this.form.value.user;
    const password = this.form.value.password;

    if (usuario === 'juan' && password === '123456') {
      this.fakeLoading();
    } else {
      this.onError();
      this.form.reset();
    }
  }

  onError() {
    this._snackBar.open('Usuario o contraseña inválidos', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['dashboard']);
      this.loading = false;
    }, 1500);
  }
}
