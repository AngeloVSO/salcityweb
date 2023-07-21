import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SalcityApiService } from 'src/app/api/salcity.api';
@Component({
  selector: 'login-component',
  template: `
    <section class="container">
      <form [formGroup]="formulario">
        <div class="card-login">
          <input
            formControlName="username"
            type="text"
            placeholder="Digite seu usuário"
          />
          <input
            formControlName="password"
            type="password"
            placeholder="Digite sua senha"
          />
          <button type="submit" (click)="login()">Fazer Login</button>
        </div>
      </form>
    </section>
  `,
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formulario!: FormGroup;

  constructor(
    private api: SalcityApiService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      username: '',
      password: '',
    });
  }

  login() {
    this.api.login(this.formulario.value).subscribe((res: any) => {
      localStorage.setItem('salcity_token', JSON.stringify(res.body?.token));

      this.router.navigate(['../admin']);
    });
  }
}
