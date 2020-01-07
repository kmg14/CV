import { Component, OnInit } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {

  constructor() {
  }

  scroll__about() {
    window.scrollTo(0, 350);
  }
  scroll__edu() {
    window.scrollTo(0, 50);
  }
  scroll__grades() {
    window.scrollTo(0, 1500);
  }


  ngOnInit() {
  }


}
