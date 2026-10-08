import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Zodiago } from './formulario/zodiago/zodiago';
import { FormsModule } from '@angular/forms';
import { Navbar } from './navbar/navbar';
import { Distancia } from './formulario/distancia/distancia';
import { RouterOutlet } from '@angular/router';
 
@Component({
  imports: [Zodiago, FormsModule, Navbar, Distancia, RouterOutlet],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  title = 'web-app';
 
  ngOnInit(): void {
    initFlowbite();
  }
}