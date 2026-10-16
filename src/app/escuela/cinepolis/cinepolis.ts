import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cinepolis',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './cinepolis.html',
  styleUrl: './cinepolis.css',
})
export class Cinepolis implements OnInit {
  formulario!: FormGroup;
  errorMessage: string = ''; 
  indiceEdicion: number = -1;

  resultadoCompra = {
    nombre: 'xxx',
    cantidadCompradores: 0,
    tarjetaCineco: 'xxx',
    cantidadBoletas: 0,
    valorAPagar: 0
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      cantidadCompradores: new FormControl('', [Validators.required]),
      tarjetaCineco: new FormControl('no', [Validators.required]),
      cantidadBoletas: new FormControl('', [Validators.required, Validators.max(7)])
    });

    const indexEdit = localStorage.getItem('indiceEdicionVenta');
    if (indexEdit !== null) {
      this.indiceEdicion = Number(indexEdit);
      const ventasGuardadas = localStorage.getItem('ventas');
      if (ventasGuardadas) {
        const listaVentas = JSON.parse(ventasGuardadas);
        const ventaAEditar = listaVentas[this.indiceEdicion];
        
        if (ventaAEditar) {
          this.formulario.patchValue({
            nombre: ventaAEditar.nombre,
            cantidadCompradores: ventaAEditar.cantidadCompradores,
            tarjetaCineco: ventaAEditar.tarjetaCineco,
            cantidadBoletas: ventaAEditar.cantidadBoletas
          });
          this.resultadoCompra = { ...ventaAEditar };
        }
      }
    }
  }

  procesarCompra(): void {
    this.errorMessage = ''; 

    const val = this.formulario.value;
    const cantidadBoletas = Number(val.cantidadBoletas);

    if (cantidadBoletas > 7) {
      this.errorMessage = 'Maximo se permiten 7 boletas';
      return;
    }

    if (this.formulario.invalid) {
      this.errorMessage = 'Complete todos los campos correctamente';
      return;
    }

    const tieneTarjeta = val.tarjetaCineco === 'si';
    const precioUnitario = 12000;
    let totalBruto = cantidadBoletas * precioUnitario;
    let descuentoPorCantidad = 0;

    if (cantidadBoletas > 5) {
      descuentoPorCantidad = 0.15;
    } else if (cantidadBoletas >= 3) {
      descuentoPorCantidad = 0.10;
    }

    let subtotal = totalBruto * (1 - descuentoPorCantidad);

    if (tieneTarjeta) {
      subtotal = subtotal * 0.90;
    }

    this.resultadoCompra.nombre = val.nombre;
    this.resultadoCompra.cantidadCompradores = Number(val.cantidadCompradores);
    this.resultadoCompra.tarjetaCineco = val.tarjetaCineco;
    this.resultadoCompra.cantidadBoletas = cantidadBoletas;
    this.resultadoCompra.valorAPagar = subtotal;

    const ventasGuardadas = localStorage.getItem('ventas');
    let listaVentas = ventasGuardadas ? JSON.parse(ventasGuardadas) : [];

    if (this.indiceEdicion !== -1) {
      listaVentas[this.indiceEdicion] = { ...this.resultadoCompra };
      localStorage.removeItem('indiceEdicionVenta'); 
    } else {
      listaVentas.push({ ...this.resultadoCompra });
    }

    localStorage.setItem('ventas', JSON.stringify(listaVentas));

    this.limpiarFormulario();
    this.errorMessage = '¡Compra procesada y guardada con éxito!';
  }

  limpiarFormulario(): void {
    this.formulario.reset({ tarjetaCineco: 'no' });
    this.errorMessage = '';
    localStorage.removeItem('indiceEdicionVenta');
    this.indiceEdicion = -1;
    this.resultadoCompra = {
      nombre: 'xxx',
      cantidadCompradores: 0,
      tarjetaCineco: 'xxx',
      cantidadBoletas: 0,
      valorAPagar: 0
    };
  }
}