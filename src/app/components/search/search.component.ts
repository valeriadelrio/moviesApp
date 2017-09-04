import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  peliculas:any []=[];
  termino:string="";

  constructor(private _ps:PeliculasService) {
  }

  ngOnInit() {
  }

  buscar(){
    this._ps.buscarPelicula(this.termino)
      .subscribe(data => {
        console.log(data);
        this.peliculas=data;
      });
  }


}
