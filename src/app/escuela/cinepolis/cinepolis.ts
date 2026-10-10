import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cinepolis.html',
  styleUrl: './cinepolis.css',
})
export class Cinepolis implements OnInit {
  formulario!: FormGroup;
  errorMessage: string = ''; 

  resultadoCompra = {
    nombre: 'xxx',
    cantidadCompradores: 0,
    tarjetaCineco: 'xxx',
    cantidadBoletas: 0,
    valorAPagar: 0
  };

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      cantidadCompradores: new FormControl('', [Validators.required]),
      tarjetaCineco: new FormControl('no', [Validators.required]),
      cantidadBoletas: new FormControl('', [Validators.required, Validators.max(7)])
    });
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
      descuentoPorCantidad = 0.15; // 15%
    } else if (cantidadBoletas >= 3) {
      descuentoPorCantidad = 0.10; // 10%
    }

    let subtotal = totalBruto * (1 - descuentoPorCantidad);

    if (tieneTarjeta) {
      subtotal = subtotal * 0.90; // 10% adicional
    }

    this.resultadoCompra.nombre = val.nombre;
    this.resultadoCompra.cantidadCompradores = Number(val.cantidadCompradores);
    this.resultadoCompra.tarjetaCineco = val.tarjetaCineco;
    this.resultadoCompra.cantidadBoletas = cantidadBoletas;
    this.resultadoCompra.valorAPagar = subtotal;
  }

  limpiarFormulario(): void {
    this.formulario.reset({ tarjetaCineco: 'no' });
    this.errorMessage = '';
    this.resultadoCompra = {
      nombre: 'xxx',
      cantidadCompradores: 0,
      tarjetaCineco: 'xxx',
      cantidadBoletas: 0,
      valorAPagar: 0
    };
  }
}