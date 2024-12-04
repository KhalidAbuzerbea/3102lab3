import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface ShoppingItem {
  name: string;
  count: number;
}

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  standalone: true,
})
export class ListItemComponent {
  @Input() item!: ShoppingItem;
  @Output() removeItem = new EventEmitter<string>();

  remove(): void {
    this.removeItem.emit(this.item.name);
  }
}
