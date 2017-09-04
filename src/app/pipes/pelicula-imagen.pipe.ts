import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {


  transform(pelicula: any, poster: boolean=false): any {
    let urlImage:string =  "http://image.tmdb.org/t/p/w300";

    if(poster){
      return urlImage + pelicula.poster_path;
    }

    if(pelicula.backdrop_path){
      return urlImage + pelicula.backdrop_path;
    }else{
      if(pelicula.poster_path){
        return urlImage + pelicula.poster_path;
      }else{
          return "assets/img/noimage.png";
      }
    }

  }

}
