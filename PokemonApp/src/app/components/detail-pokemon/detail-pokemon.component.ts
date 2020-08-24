import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonModel } from '../../models/pokemon.model';
import { ActivatedRoute } from '@angular/router';
import { SpriteModel } from '../../models/sprite.model';
import { OtherModel } from '../../models/other.model';
import { Dream_world } from '../../models/Dream_world.model';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: []
})
export class DetailPokemonComponent implements OnInit {
  id:string;
  pokemon:PokemonModel = new PokemonModel();
  

  constructor(private _route:ActivatedRoute,
              private _service:PokemonService) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this.getByid(); 
    this.pokemon.sprites = new SpriteModel();
    this.pokemon.sprites.other = new OtherModel();
    this.pokemon.sprites.other.dream_world = new Dream_world();
  }

  getByid(){
    this._service.getById(this.id).subscribe((data) => {
      if(data != undefined){
        this.pokemon = data;
        console.log(this.pokemon);
      }
    })
  }



}
