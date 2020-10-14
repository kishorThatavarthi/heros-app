import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HEROES } from './mock-heros';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: [ './heros.component.css' ]
})
export class HerosComponent  {
 heroes = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
