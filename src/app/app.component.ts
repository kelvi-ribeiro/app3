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
      apiKey: "AIzaSyCpl7n3FuV8rrrbIwexZo7rh9raoofC4A8",
      authDomain: "jta-instagram-clone-500ab.firebaseapp.com",
      databaseURL: "https://jta-instagram-clone-500ab.firebaseio.com",
      projectId: "jta-instagram-clone-500ab",
      storageBucket: "jta-instagram-clone-500ab.appspot.com",
      messagingSenderId: "64933726842"
    };
    firebase.initializeApp(config)
  }
}
