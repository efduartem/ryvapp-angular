import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MatInputModule,
          MatButtonModule,
          MatSelectModule,
          MatIconModule,
          MatCardModule,
          MatGridListModule,
          MatTableModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

//Routes
import { AppRoutingModule } from './app-routing.module';

//COMPONENTS
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ListProductsComponent } from './components/list-products/list-products.component';

export const firebaseConfig = {
  apiKey: "AIzaSyD_r2_zD0ZWbSJ_HMvbqxp9ElvhWbIqRNQ",
  authDomain: "ryvapp-ed171.firebaseapp.com",
  databaseURL: "https://ryvapp-ed171.firebaseio.com",
  projectId: "ryvapp-ed171",
  storageBucket: "ryvapp-ed171.appspot.com",
  messagingSenderId: "610335523440"
};

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    ListProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
