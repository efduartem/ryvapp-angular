import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  title = 'RyV';
  dataSource:any;
  constructor(public afdb: AngularFireDatabase, private router: Router){
    this.afdb.list("productos").valueChanges().subscribe((data)=>{
        this.initializeItems(data);
    });
  }

  ngOnInit() {
  }

  initializeItems(data:any) {
    this.dataSource = new MatTableDataSource(data);
  }

  displayedColumns = ['name', 'price'];

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  createProduct(){
    this.router.navigateByUrl('/createProduct');
  }

}
