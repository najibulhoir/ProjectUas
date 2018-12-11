import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import _ from 'lodash';
import {PostComponent} from '../shared/post/post.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoritesList: any = [];

  constructor() { }

  ngOnInit() {

    const uid = firebase.auth().currentUser.uid;
    const favRef = firebase.database().ref('favorites').child(uid);

    favRef.once('value').then(snapshot => {
      const favoritesObj = snapshot.val();

      this.favoritesList = _.values(favoritesObj);

    });
  }

}
