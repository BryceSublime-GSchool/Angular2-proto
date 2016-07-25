//import modules, decorators, and methods from npm packages
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import custom classes and services
import { Hero } from './hero';
import { HeroService } from './hero.service';

//state the @Component decorator to create. This object takes in parameters like selector, template, stylesheetUrl, providers, and directives.
@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
})

//export class defines the component's name, variables, and functions.
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

//constructor statements inject services (from the imports at the top of this file)
  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
