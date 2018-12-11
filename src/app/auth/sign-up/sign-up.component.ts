import { Component, OnInit, Injectable } from '@angular/core';
import {NgForm} from "@angular/forms";

import {NotificationService} from "../../shared/notification.service";
import * as firebase from 'firebase/app';


@Injectable()
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private notifier: NotificationService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    const fullname = form.value.fullname;
    const email = form.value.email;
    const password = form.value.password;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(userData => {
        firebase.auth().currentUser.sendEmailVerification();

        const message = `A verification email has been sent to ${email}. kindly check your inbox and follow the steps
         in the verification email. Once verification is complete, please login to the application`;
        this.notifier.display('success', message);

        return firebase.database().ref('users/' + userData.user).set({
          email: email,
          uid: userData.user.uid,
          registrationDate: new Date().toString(),
          name: fullname
        })
          .then(() => {
            firebase.auth().signOut();
          });

      })
      .catch(err => {
        this.notifier.display('error', err.message);
      });

  }

}