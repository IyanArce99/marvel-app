import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelService } from './services/marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marvel-app';
  public marvelCharacters: Observable<any>;
  constructor(private marvelApi: MarvelService) {
    this.marvelCharacters = this.marvelApi.getAllCharacter();
  }

  ngOnInit() {
    this.marvelApi.getAllCharacter().subscribe(el => {
      console.log(el)
    })
  }
}
