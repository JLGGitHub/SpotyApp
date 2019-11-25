import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImagen'
})
export class NoImagenPipe implements PipeTransform {

  transform(imagen: any[]): string {

    if(!imagen){
      return 'assets/img/noImagen.png'; 
    }
    if(imagen.length > 0 ){
      return imagen[0].url; 
    }

    return 'assets/img/noImagen.png';
  }

}
