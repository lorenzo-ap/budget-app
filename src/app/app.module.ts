import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetItemCardComponent } from './budget-item-list/budget-item-card/budget-item-card.component';
import { BudgetItemListComponent } from './budget-item-list/budget-item-list.component';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
    declarations: [
        AppComponent,
        MainPageComponent,
        AddItemFormComponent,
        BudgetItemListComponent,
        BudgetItemCardComponent,
        EditItemModalComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatDialogModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
