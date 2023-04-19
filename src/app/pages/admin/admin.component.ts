import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SalcityApiService } from 'src/app/api/salcity.api';
@Component({
  selector: 'login-component',
  template: `
    <section class="container">
      <form [formGroup]="formulario">
        <div class="card-admin">
          <input
            formControlName="name"
            type="text"
            placeholder="Digite o nome da carta"
          />
          <input
            formControlName="imageUrl"
            type="text"
            placeholder="Digite o link da carta"
          />
          <button type="submit" (click)="addCard()">Cadastrar Carta</button>
          <button>Atualizar Carta</button>
        </div>
      </form>
    </section>
  `,
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private api: SalcityApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      name: '',
      imageUrl: '',
    });
  }

  addCard() {
    this.api
      .addCard(this.formulario.value)
      .subscribe(() => alert('Carta cadastrada com sucesso!'));
  }
}
