import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/UserModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userModel = new UserModel();
  constructor() { }

  ngOnInit() {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView(
      {
        behavior: 'smooth'
      }
    );
}

}
