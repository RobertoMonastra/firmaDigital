import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirmaDigitalService } from 'src/app/services/firma-digital.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formularioUsuario!: FormGroup;

  constructor(private fb: FormBuilder,
              private firmaService : FirmaDigitalService) { }

  ngOnInit(): void {
    this.formularioUsuario = this.fb.group({
      apellidos: ['', Validators.required],
      nombres: ['', Validators.required],
      puesto: ['', Validators.required],
      interno: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

  }

  enviarDatos(){
    // if (!this.formularioUsuario.valid) {
    //   this.formularioUsuario.markAllAsTouched();
    //   return
    // }else{
      this.firmaService.setNombre(this.formularioUsuario.value.nombres)
      this.firmaService.setApellido(this.formularioUsuario.value.apellidos)
      this.firmaService.setPuesto(this.formularioUsuario.value.puesto)
      this.firmaService.setInterno(this.formularioUsuario.value.interno)
      this.firmaService.setEmail(this.formularioUsuario.value.email)
    // }
  }

  

  

}
