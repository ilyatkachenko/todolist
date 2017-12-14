import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatCardModule, MatProgressSpinnerModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatDialogModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatCardModule, MatProgressSpinnerModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatDialogModule],
    exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatCardModule, MatProgressSpinnerModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatDialogModule],
})
export class MaterialModule { }