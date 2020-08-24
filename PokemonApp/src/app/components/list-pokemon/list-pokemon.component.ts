import { Component, OnInit } from '@angular/core';
import { PokemonListModel } from '../../models/pokemon.list.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: []
})
export class ListPokemonComponent implements OnInit {
  listado: PokemonListModel[] = [];
  p: number = 1;
  countPage:number = 50;

  constructor(private _service:PokemonService) { }

  ngOnInit() {
    this.getAllPokemon();
  }

  getAllPokemon(){
    this._service.getAll().subscribe((data) => {
      if(data !== undefined){
        this.listado = data;
      }
    })
  }

}
