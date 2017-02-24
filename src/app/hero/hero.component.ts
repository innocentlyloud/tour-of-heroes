import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero',
  //providers: [HeroService],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes : Hero[];
  constructor(private heroService: HeroService) {
    //this.heroes = this.heroService.getHeroes();
  }


  //heroes : Hero[];
  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  selectedHero : Hero;
  onSelect(hero : Hero): void{
    this.selectedHero = hero;
  }
  ngOnInit(): void {
    this.getHeroes();
  }

}
