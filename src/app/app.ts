import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Aquí corregimos la ruta exacta hacia tu carpeta 'formulario\zodiago'
import { Zodiago } from './formulario/zodiago/zodiago';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Zodiago],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'segundoparcialAngular';
}