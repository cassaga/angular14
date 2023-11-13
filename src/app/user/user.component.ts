import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    street: new FormControl(''),
    postalCode: new FormControl(''),
    city: new FormControl('')
  });

information : boolean = false;

  onSubmit() {
    const newUser = this.userForm.value;
this.information = true;
    console.log('Nouvel utilisateur :', newUser);
  }
}
