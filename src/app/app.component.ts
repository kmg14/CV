import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Default Flag
  num = 1;
  imageSrc = 'https://res.cloudinary.com/dvgxfctbd/image/upload/c_scale,r_4,w_30/v1571670961/flag.png';

  // Icelandic and British Flag
  imageButtons = [
    {src: 'https://res.cloudinary.com/dvgxfctbd/image/upload/c_scale,r_4,w_30/v1571670961/flag.png'},
    {src: 'https://res.cloudinary.com/dvgxfctbd/image/upload/c_scale,r_4,w_30/v1571670961/is.png'}];

constructor(private translate: TranslateService) {
  translate.setDefaultLang('is');
}

switchLanguage(language: string) {
  this.translate.use(language);
  }

  Click( ) {
    if (this.num === 0) {
      this.switchLanguage('is');
      this.imageSrc = this.imageButtons[0].src;
      this.num = 1;
    } else if (this.num === 1) {
      this.switchLanguage('en');
      this.imageSrc = this.imageButtons[1].src;
      this.num = 0;
    }

    console.log(this.num);
  }

}
