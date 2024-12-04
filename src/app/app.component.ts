import { Component } from '@angular/core';
import { ListManagerComponent } from './list-manager/list-manager.component';

@Component({
  selector: 'app-root',
  template: `<app-list-manager></app-list-manager>`,
  standalone: true,
  imports: [ListManagerComponent],
})
export class AppComponent {}
