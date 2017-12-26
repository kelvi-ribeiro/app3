import { Component,OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit():void{
    var config = {
      apiKey: "AIzaSyBUbCyIe0lH3KW6pvrBYxW11TZP5kaWW2s",
      authDomain: "jta-instagram-clone-d8149.firebaseapp.com",
      databaseURL: "https://jta-instagram-clone-d8149.firebaseio.com",
      projectId: "jta-instagram-clone-d8149",
      storageBucket: "jta-instagram-clone-d8149.appspot.com",
      messagingSenderId: "467604130286"
    };
    firebase.initializeApp(config)
  }
}
