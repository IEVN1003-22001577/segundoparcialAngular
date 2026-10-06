import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-zodiago',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './zodiago.html',
  styleUrls: ['./zodiago.css']
})
export class Zodiago {
  nombre: string = "";
  apaterno: string = "";
  amaterno: string = "";
  dia: number = 0;
  mes: number = 0;
  anio: number = 0;
  sexo: string = "";

  edad: number = 0;
  signo: string = "";
  imagen: string = "";
  mostrar: boolean = false;

  imprimir() {
    const hoy = new Date();
    const anioActual = hoy.getFullYear();
    const mesActual = hoy.getMonth() + 1; // getMonth() devuelve de 0 a 11
    const diaActual = hoy.getDate();


    let edadCalculada = anioActual - this.anio;

    
    if (mesActual < this.mes || (mesActual === this.mes && diaActual < this.dia)) {
      edadCalculada--;

    this.edad = edadCalculada;

   
    let residuo = (this.anio - 1900) % 12;

    if (residuo === 0) {
      this.signo = "Rata";
      this.imagen = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Chinese_zodiac_-_Rat.svg/200px-Chinese_zodiac_-_Rat.svg.png";
    } else if (residuo === 1) {
      this.signo = "Buey";
      this.imagen = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Chinese_zodiac_-_Ox.svg/200px-Chinese_zodiac_-_Ox.svg.png";
    } else if (residuo === 2) {
      this.signo = "Tigre";
      this.imagen = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Chinese_zodiac_-_Tiger.svg/200px-Chinese_zodiac_-_Tiger.svg.png";
    } else if (residuo === 3) {
      this.signo = "Conejo";
      this.imagen = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Chinese_zodiac_-_Rabbit.svg/200px-Chinese_zodiac_-_Rabbit.svg.png";
    } else if (residuo === 4) {
      this.signo = "Dragón";
      this.imagen = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Chinese_zodiac_-_Dragon.svg/200px-Chinese_zodiac_-_Dragon.svg.png";
    } else if (residuo === 5) {
      this.signo = "Serpiente";
      this.imagen = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Chinese_zodiac_-_Snake.svg/200px-Chinese_zodiac_-_Snake.svg.png";
    } else if (residuo === 6) {
      this.signo = "Caballo";
      this.imagen = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Chinese_zodiac_-_Horse.svg/200px-Chinese_zodiac_-_Horse.svg.png";
    } else if (residuo === 7) {
      this.signo = "Cabra";
      this.imagen = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Chinese_zodiac_-_Goat.svg/200px-Chinese_zodiac_-_Goat.svg.png";
    } else if (residuo === 8) {
      this.signo = "Mono";
      this.imagen = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Chinese_zodiac_-_Monkey.svg/200px-Chinese_zodiac_-_Monkey.svg.png";
    } else if (residuo === 9) {
      this.signo = "Gallo";
      this.imagen = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Chinese_zodiac_-_Rooster.svg/200px-Chinese_zodiac_-_Rooster.svg.png";
    } else if (residuo === 10) {
      this.signo = "Perro";
      this.imagen = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Chinese_zodiac_-_Dog.svg/200px-Chinese_zodiac_-_Dog.svg.png";
    } else {
      this.signo = "Cerdo";
      this.imagen = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Chinese_zodiac_-_Pig.svg/200px-Chinese_zodiac_-_Pig.svg.png";
    }

    this.mostrar = true;
  }
}
}