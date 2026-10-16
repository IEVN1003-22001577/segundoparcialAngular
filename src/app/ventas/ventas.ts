import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router'; // 1. Importa Router
import { IVentas } from './IVentas';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  styleUrl: './ventas.css',
  templateUrl: './ventas.html',
})
export class Ventas implements OnInit {
  indiceEdicion: number = -1;
  formulario!: FormGroup;
  ventas: IVentas[] = [];
  errorMessage: string = '';

  nuevaVenta: IVentas = {
    nombre: '',
    cantidadCompradores: 0,
    tarjetaCineco: 'no',
    cantidadBoletas: 0,
    valorAPagar: 0
  };

  // 2. Inyecta el Router en el constructor
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      cantidadCompradores: new FormControl(''),
      tarjetaCineco: new FormControl('no'),
      cantidadBoletas: new FormControl('')
    });

    this.cargarVentas();
  }

  cargarVentas(): void {
    const datos = localStorage.getItem('ventas');
    if (datos) {
      try {
        this.ventas = JSON.parse(datos) as IVentas[];
      } catch (error) {
        this.ventas = [];
      }
    }
  }

  eliminarVenta(index: number): void {
    this.ventas.splice(index, 1);
    localStorage.setItem('ventas', JSON.stringify(this.ventas));
  }

  // 3. Método para editar que guarda el índice y redirige a Cinépolis
  editarVenta(index: number): void {
    // Guardamos el índice actual que vamos a editar en localStorage
    localStorage.setItem('indiceEdicionVenta', index.toString());
    
    // Redirigimos al formulario de Cinépolis
    this.router.navigate(['/escuela/cinepolis']);
  }
}