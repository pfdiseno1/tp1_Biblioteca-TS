/*  Crea un archivo libro.ts:
- Define una interfaz Libro con las propiedades titulo, autor (de tipo Autor), y el método obtenerResumen().
- Implementa una clase LibroImpreso que cumple con la interfaz Libro. Esta clase debe tener un constructor que reciba el título y el autor del libro.*/

import { Autor } from "./Autor";
import { Persona } from "./Persona";


export interface Libro {
    titulo : string;
    autor : Autor;
    obtenerResumen() : string;

}

 