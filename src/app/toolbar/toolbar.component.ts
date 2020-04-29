import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  // tslint:disable-next-line: only-arrow-functions
  window.onscroll = function() {scrollFunction(); };

  function scrollFunction() {
   if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById('concept').style.height = '5px';
    document.getElementById('small').style.fontSize = '1.5em';
    document.getElementById('concept').style.filter = 'grayscale(100%)';

   } else {
     document.getElementById('concept').style.height = '30px';
     document.getElementById('small').style.fontSize = '2em';
     document.getElementById('concept').style.filter = 'grayscale(0%)';
   }

   document.getElementById('small').style.display = 'grid';
  }
  }

}
