import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  name:string = "";
  price:string = "";
  constructor(public afdb: AngularFireDatabase, private router: Router) { }

  ngOnInit() {
  }

  saveProduct(){
      if(this.name !== "" && this.price != ""){
        let idProduct = new Date().valueOf().toString();
        let product:any = {
          nombre:this.name,
          precio_1:this.price
        }
        this.afdb.object(`/productos/${idProduct}`).update(product).then(()=>{
            this.router.navigateByUrl('/home');
        });
      }
  }

  cancel(){
    this.router.navigateByUrl('/home');
  }

  nameOnchange(event){
      this.name = event.target.value;
  }

  priceOnchange(event){
      this.price = event.target.value;
  }

}
