import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
    selector: 'app-add-item-form',
    templateUrl: './add-item-form.component.html',
    styleUrls: ['./add-item-form.component.scss'],
})
export class AddItemFormComponent {
    @Input() item: BudgetItem;
    @Output() formSubmitEvent = new EventEmitter<BudgetItem>();

    isNewItem: boolean;

    onSubmit(form: NgForm): void {
        this.formSubmitEvent.emit(form.value);
        form.reset();
    }

    ngOnInit(): void {
        if (this.item) {
            this.isNewItem = false;
        } else {
            this.isNewItem = true;
            this.item = new BudgetItem('', null);
        }
    }
}
