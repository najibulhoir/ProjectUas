import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProjectUAS';
  ngOnInit() {
    //Firebase Config
    const config = {
      apiKey: "AIzaSyCkjnIq1aXyrNuEesmbA1QuIBS4qhSb_pU",
      authDomain: "uas-project-6c4ad.firebaseapp.com",
      databaseURL: "https://uas-project-6c4ad.firebaseio.com",
      projectId: "uas-project-6c4ad",
      storageBucket: "uas-project-6c4ad.appspot.com",
      messagingSenderId: "735832948155"
    };
    firebase.initializeApp(config);
  
  
  
  

  }


}
