import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { CreateProductComponent } from './components/create-product/create-product.component';

const routes: Routes = [
   {path: '', component: ListProductsComponent},
   {path: 'home', component: ListProductsComponent},
   {path: 'createProduct', component: CreateProductComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

export const app_routing = RouterModule.forRoot(routes, {useHash:true});
