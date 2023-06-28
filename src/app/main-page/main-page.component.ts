import { Component } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
    budgetItems: BudgetItem[] = [];
    totalBudget: number = 0;

    addItem(newItem: BudgetItem): void {
        this.budgetItems.push(newItem);

        this.totalBudget += newItem.amount;
    }

    deleteItem(item: BudgetItem): void {
        const itemIndex = this.budgetItems.indexOf(item);
        this.budgetItems.splice(itemIndex, 1);

        this.totalBudget -= item.amount;
    }

    updateItem({ oldItem, newItem }: UpdateEvent): void {
        const itemIndex = this.budgetItems.indexOf(oldItem);
        this.budgetItems[itemIndex] = newItem;

        this.totalBudget += newItem.amount - oldItem.amount;
    }
}
