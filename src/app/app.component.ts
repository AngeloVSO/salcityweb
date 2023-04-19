import { Component, OnInit } from '@angular/core';
import { SalcityApiService } from './api/salcity.api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [SalcityApiService],
})
export class AppComponent {
  title = 'salcity';
}
