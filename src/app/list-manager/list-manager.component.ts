import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListItemComponent, ShoppingItem } from '../list-item/list-item.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css'],
  standalone: true,
  imports: [FormsModule, NgFor, ListItemComponent],
})
export class ListManagerComponent {
  shoppingList: ShoppingItem[] = [];
  newItem: string = '';

  addItem(): void {
    if (!this.newItem.trim()) return;

    const existingItem = this.shoppingList.find(
      (item) => item.name.toLowerCase() === this.newItem.toLowerCase()
    );

    if (existingItem) {
      existingItem.count++;
    } else {
      this.shoppingList.push({ name: this.newItem.trim(), count: 1 });
    }

    this.newItem = '';
  }

  removeItem(itemName: string): void {
    this.shoppingList = this.shoppingList.filter(
      (item) => item.name !== itemName
    );
  }
}
