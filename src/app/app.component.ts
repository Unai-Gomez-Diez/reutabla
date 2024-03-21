import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  misCabeceras1: string[] = ["Titulo", "Autor"];
  misDatos1: any[] = [
    { "Titulo": "El quijote", "Autor": "Cervantes" },
    { "Titulo": "100 años de soledad", "Autor": "Gabriel García Márquez" },
    { "Titulo": "Los pilares de la Tierra", "Autor": "Ken Follet" }
  ];

  misCabeceras2: string[] = ["Nombre", "Edad", "País"];
  misDatos2: any[] = [
    { "Nombre": "Juan", "Edad": 30, "País": "España" },
    { "Nombre": "Maria", "Edad": 25, "País": "Argentina" },
    { "Nombre": "Ahmed", "Edad": 35, "País": "Egipto" }
  ];

  misCabeceras3: string[] = ["Producto", "Precio"];
  misDatos3: any[] = [
    { "Producto": "Laptop", "Precio": 800 },
    { "Producto": "Teléfono", "Precio": 500 },
    { "Producto": "Tablet", "Precio": 300 }
  ];

  misCabeceras4: string[] = ["Ciudad", "Población"];
  misDatos4: any[] = [
    { "Ciudad": "Nueva York", "Población": 8398748 },
    { "Ciudad": "Tokio", "Población": 9273000 },
    { "Ciudad": "Londres", "Población": 8982000 }
  ];
}
