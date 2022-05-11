import { Component, Input, OnInit } from '@angular/core';
import { PokeDetails } from 'src/app/interfaces/poke-details';

@Component({
  selector: 'app-poke-details-component',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css'],
})
export class PokeDetailsComponent implements OnInit {
  @Input() pokeDetails: PokeDetails | undefined = undefined;

  constructor() {}

  ngOnInit(): void {}
}
