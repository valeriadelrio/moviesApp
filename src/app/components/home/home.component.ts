import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  peliculas:any[];

  constructor(private _ps: PeliculasService) { }

  ngOnInit() {
    this.obtenerPopulares();
    this.obtenerCartelera();
  }

  obtenerPopulares(){
    this._ps.getPopulares()
      .subscribe(data =>{
        console.log(data);
        this.peliculas = data;
      })
  }

  obtenerCartelera(){
    this._ps.getCarteleras()
      .subscribe(data =>{
        console.log(data);
        this.peliculas = data;
      })
  }

}
