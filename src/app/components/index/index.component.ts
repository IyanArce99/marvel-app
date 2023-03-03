import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MarvelService } from '../../services/marvel.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public filteredCharacters: Array<any> = [];
  public initialCharacters: Array<any> = [];

  public searchText: string = '';

  constructor(private marvelApi: MarvelService,
              private router: Router) {  }

  ngOnInit(): void {
    this.marvelApi.getAllCharacter().subscribe(el => {
      this.initialCharacters = el;
      this.filteredCharacters = this.initialCharacters;
    });
  }

  onChange(newValue: any) {
    this.filteredCharacters = this.initialCharacters.filter((element: any) => element.name.toLowerCase().startsWith(newValue));      
  }

  heroProfile() {
    this.router.navigate(['hero-info'])
  }

}
