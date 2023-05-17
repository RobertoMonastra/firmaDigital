import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FirmaDigitalService } from 'src/app/services/firma-digital.service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-firma',
  templateUrl: './firma.component.html',
  styleUrls: ['./firma.component.css']
})
export class FirmaComponent implements OnInit {
  
  nombreApellido : string = '123 123';
  puesto : string = '123';
  interno : string = '123';
  email : string = '123';
  // canvas : any;

  // @ViewChild('firmaImg') firmaImg!: ElementRef;
  // @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('firma', { static: true }) firma!: ElementRef;
  
  constructor(private firmaService : FirmaDigitalService) { }

  ngOnInit(): void {

    this.nombreApellido = (this.firmaService.nombre + ' ' + this.firmaService.apellido)
    this.puesto = this.firmaService.puesto;
    this.interno = this.firmaService.interno;
    this.email = this.firmaService.email;

    console.log(this.nombreApellido, this.puesto, this.interno, this.email)
  }

  // 
  

descargarImagen() {
  const container = this.firma.nativeElement;

  html2canvas(container).then((canvas) => {
    // Se crea una URL de la imagen dibujada en el canvas
    const url = canvas.toDataURL('image/png');

    // Se crea un enlace y se descarga la imagen
    const link = document.createElement('a');
    link.download = 'firma.png';
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}


  // draw() {
  //   const canvas = this.canvas.nativeElement;
  //   const ctx = canvas.getContext('2d');
  
  //   // Dibujar fondo del documento
  //   const img = new Image();
  //   img.onload = () => {
  //     if (ctx) {
  //       ctx.drawImage(img, 0, 0);
  //       ctx.fillStyle = '#000';
  //       ctx.font = '20px Arial';
  //       ctx.fillText(`Nombre: ${this.firmaService.nombre}`, 100, 100);
  //       ctx.fillText(`Apellido: ${this.firmaService.apellido}`, 100, 120);
  //       ctx.fillText(`Puesto: ${this.firmaService.puesto}`, 100, 140);
  //       ctx.fillText(`Interno: ${this.firmaService.interno}`, 100, 160);
  //       ctx.fillText(`Email: ${this.firmaService.email}`, 100, 180);
  //     }
  //     // Generar archivo descargable
  //     canvas.toBlob((blob : any) => {
  //       const link = document.createElement('a');
  //       link.download = 'firma.png';
  //       link.href = window.URL.createObjectURL(blob);
  //       link.click();
  //     });
  //   };
  //   img.src = '/assets/templateVacio.png';
  // }

  // downloadImage(): void {
  //    const canvas = document.getElementById('firmaImg') as HTMLCanvasElement;
  //       this.draw();
  //       if (canvas) {
  //         const imagenBase64 = canvas.toDataURL('image/png');
  //         const enlaceDescarga = document.createElement('a');
  //         enlaceDescarga.href = imagenBase64;
  //         enlaceDescarga.download = 'firma.png';
  //         enlaceDescarga.click();
  //       } else {
  //         console.log('Canvas no encontrado');
  //       }
  //       const link = document.createElement('a');
  //       link.download = 'firma.png';
  //       link.href = canvas.toDataURL();
  //       link.click();
  // }
  
}
