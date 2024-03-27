/*Crea un archivo biblioteca.ts:
   - Implementa una clase Biblioteca que representará la biblioteca. Esta clase debe tener una propiedad privada libros que sea un array de objetos que cumplen con la interfaz Libro.
   - Implementa un método agregarLibro(libro: Libro) que permita agregar un libro a la biblioteca.
   - Implementa un método mostrarCatalogo() que muestre por consola el catálogo de libros de la biblioteca.*/

import { LibroImpreso } from "./LibroImpreso";


   export class Biblioteca {
    private libros : LibroImpreso[] = [];
    agregarLibro(libro : LibroImpreso) : LibroImpreso {
            this.libros.push(libro)
            console.log(`Libro agregado a la biblioteca: ${libro.obtenerResumen()}`)
            return libro
    }
        mostrarCatalogo() : LibroImpreso[]{
            console.log('Catalogo de la biblioteca')
            this.libros.forEach((libro) => {
                console.log(libro.obtenerResumen())
            })
            return this.libros
        }

   }
