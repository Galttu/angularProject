import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table'; 
import { MatPaginator } from '@angular/material/paginator';
import {DataSource} from '@angular/cdk/collections';


import { MatPaginatorModule } from '@angular/material/paginator'; 
import { AccountsRoutingModule } from './accounts-routing.module';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountsRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        

    ],
    declarations: [
        ListComponent,
        AddEditComponent
    ]
})
export class AccountsModule { }