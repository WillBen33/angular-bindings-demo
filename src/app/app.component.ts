import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-binding-2';

  welcome = "Bienvenue sur mon site";

  imgSrc = "https://via.placeholder.com/350x150";

  isClicked() {
    console.log("Coucou !");
  }

  user = {
    quote: ""
  }


}
