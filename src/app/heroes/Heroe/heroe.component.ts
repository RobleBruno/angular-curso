import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{

    nombre:string = 'IronMan'
    edad: number = 50

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return`${this.nombre} - ${this.edad}`};


        cambiarNombre():void{
            this.nombre = 'Spiderman'
        }

        cambiarEdad(){
            return this.edad = 30

        }
}

