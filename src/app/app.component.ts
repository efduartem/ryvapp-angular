import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public afAuth: AngularFireAuth) {
      this.afAuth.auth.signInWithEmailAndPassword("ryv@mail.com", "ryvangu").then(()=>{
        
      })
      .catch((error) => {
        console.log(error);
      })
  }

}
