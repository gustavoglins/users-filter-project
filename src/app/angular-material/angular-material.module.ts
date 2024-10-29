import { NgModule } from "@angular/core";

import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
    imports: [
        MatListModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatSelectModule,
        MatButtonModule,
        MatTableModule
    ],
    exports: [
        MatListModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatSelectModule,
        MatButtonModule,
        MatTableModule
    ],
    providers: [
        provideNativeDateAdapter()
    ],
})
export class AngularMaterialModule {

}