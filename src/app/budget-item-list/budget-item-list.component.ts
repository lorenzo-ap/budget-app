import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

export interface UpdateEvent {
    oldItem: BudgetItem;
    newItem: BudgetItem;
}

@Component({
    selector: 'app-budget-item-list',
    templateUrl: './budget-item-list.component.html',
    styleUrls: ['./budget-item-list.component.scss'],
})
export class BudgetItemListComponent {
    @Input() budgetItems: BudgetItem[];
    @Output() deleteItemEvent = new EventEmitter<BudgetItem>();
    @Output() updateItemEvent = new EventEmitter<UpdateEvent>();

    constructor(public dialog: MatDialog) {}

    onCardClicked(item: BudgetItem): void {
        const dialogRef = this.dialog.open(EditItemModalComponent, {
            width: '580px',
            data: item,
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result?.amount === null) {
                this.deleteItemEvent.emit(item);
            } else if (result) {
                this.updateItemEvent.emit({
                    oldItem: item,
                    newItem: result,
                });
            }
        });
    }
}
