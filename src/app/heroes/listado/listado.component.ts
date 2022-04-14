import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent{

  Heroes:string[] = ['Spiderman','Hulk','thor','ironman','pantera'];
  heroeBorrado:string = ''

borrarHeroe(){
this.heroeBorrado = this.Heroes.shift() || '';

  }
}
