import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  peliculas:any[];
  cartelera:any;
  populares:any;
  popularesKids:any;
  valoradas:any;

  constructor(private _ps: PeliculasService) {

    this.obtenerCartelera();
    this.obtenerPopulares();
    this.obtenerPopularesKids();
    this.obtenerValoradas();
  }


  ngOnInit() {
  }

  obtenerPopulares(){
    this._ps.getPopulares()
      .subscribe(data =>{
        this.populares = data;
      })
  }

  obtenerCartelera(){
    this._ps.getCarteleras()
      .subscribe(data =>{
        console.log(data);
        this.cartelera = data;
      })
  }

  obtenerPopularesKids(){
    this._ps.getPopularesKids()
      .subscribe(data =>{
        console.log(data);
        this.popularesKids = data;
      })
  }

  obtenerValoradas(){
    this._ps.getValoradas()
      .subscribe(data =>{
        this.valoradas = data;
      })
  }

}
