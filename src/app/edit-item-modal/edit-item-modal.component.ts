import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
    selector: 'app-edit-item-modal',
    templateUrl: './edit-item-modal.component.html',
    styleUrls: ['./edit-item-modal.component.scss'],
})
export class EditItemModalComponent {
    constructor(
        public dialogRef: MatDialogRef<EditItemModalComponent>,
        @Inject(MAT_DIALOG_DATA) public item: BudgetItem
    ) {}

    onSubmitted(updatedItem: BudgetItem): void {
        this.dialogRef.close(updatedItem);
    }

    onRemoveClick() {
        this.dialogRef.close(new BudgetItem('', null));
    }
}
