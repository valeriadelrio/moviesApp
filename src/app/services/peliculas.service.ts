import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class PeliculasService {

  private apikey:string = "38a8dce0a03746d5e094479ff451d2bf";
  private urlMovieedb: string = "https://api.themoviedb.org/3";

  private urlImage:string =  "http://image.tmdb.org/t/p/w300"; //poster_path - backdrop_path 300 es resolucion image

  constructor( private jsonp: Jsonp) { }


  getCarteleras(){
    let  desde = new Date();
    let hasta = new Date();

    hasta.setDate(hasta.getDate() + 7);

    let desdeStr = `${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDate()}`;
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDate()}`;

    let url:string = `${ this.urlMovieedb }/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .map(res => res.json().results);
  }
  getPopulares(){

    let url:string = `${ this.urlMovieedb }/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .map(res => res.json().results);
  }

  getValoradas(){
    let url:string = `${this.urlMovieedb}/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .map(res => res.json().results);
  }

  getPopularesKids(){
    let url:string = `${this.urlMovieedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .map(res => res.json().results);
  }

  buscarPelicula(peli:string){
    let url:string = `${ this.urlMovieedb }/search/movie?query=${peli}&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .map(res => res.json().results);
  }

  getImageUrl(idImg:string):string{
    if(idImg === null){
      return "assets/img/noimage.png";

    }else{
        return `${this.urlImage}/${idImg.toString()}`;
    }


  }

}
