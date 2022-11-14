import { Component } from '@angular/core';
import { getAuth, signOut } from "firebase/auth";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor() { }

  ngOnInit(): void {
  }
  logOut(){
    const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  }
}
