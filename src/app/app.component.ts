import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MarvelService } from './services/marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marvel-app';
  public filteredCharacters: Array<any> = [];
  public initialCharacters: Array<any> = [];

  public searchText: string = '';

  constructor(private marvelApi: MarvelService,
              private router: Router) {  }

  ngOnInit() {
    this.marvelApi.getAllCharacter().subscribe(el => {
      this.initialCharacters = el;
      this.filteredCharacters = this.initialCharacters;
    });
  }

  onChange(newValue: any) {
      let filter = this.initialCharacters.filter((element: any) => element.name.toLowerCase().startsWith(newValue));      
      this.filteredCharacters = filter;
      console.log("filtered", this.filteredCharacters);
  }

  heroProfile() {
    this.router.navigateByUrl('./hero-info');
  }
}
