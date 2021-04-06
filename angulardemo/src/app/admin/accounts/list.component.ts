import {AfterViewInit, Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { first } from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
import { AccountService } from '@app/_services';
import { Account } from '@app/_models';
import { MatPaginator } from '@angular/material/paginator';
@Component({ templateUrl: 'list.component.html' })

export class ListComponent implements OnInit  {
    displayedColumns: string[] = ['name','email','role','edit'];

    accounts: any[];
    dataSource = new MatTableDataSource<any>();
    @ViewChild(MatPaginator) paginator: MatPaginator;
    constructor(private accountService: AccountService) {}

    ngOnInit() {
        this.accountService.getAll() 
            .pipe(first())
            .subscribe(accounts => {
                this.dataSource.data = accounts; 
                this.dataSource.paginator = this.paginator;
            });
    }
    deleteAccount(id: string) {
        const account = this.dataSource.data.find(x => x.id === id);
        account.isDeleting = true;
        this.accountService.delete(id)
            .pipe(first())
            .subscribe(() => {
                this.dataSource.data = this.dataSource.data.filter(x => x.id !== id) 
            });
    }
    
}
