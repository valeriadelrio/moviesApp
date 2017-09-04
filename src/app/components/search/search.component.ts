import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  peliculas:any []=[];
  termino:string="";

  constructor(private _ps:PeliculasService,
              private route: ActivatedRoute) {
      this.route.params.subscribe(parametros => {
        if(parametros['termino']){
          this.termino = parametros['termino'];
          this.buscar();
        }
      })
  }

  ngOnInit() {
  }

  buscar(){
    this._ps.buscarPelicula(this.termino)
      .subscribe(data => {
        this.peliculas=data;
      });
  }


}
