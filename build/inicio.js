"use strict";
/*4. Crea un archivo index.ts:
   - En este archivo, importa las clases y interfaces necesarias de los archivos anteriores.
   - Crea instancias de objetos para representar autores y libros.
   - Crea una instancia de la biblioteca.
   - Agrega algunos libros a la biblioteca usando el método agregarLibro.
   - Muestra el catálogo de la biblioteca usando el método mostrarCatalogo.*/
Object.defineProperty(exports, "__esModule", { value: true });
const Autor_1 = require("./entities/Autor");
const Biblioteca_1 = require("./entities/Biblioteca");
const LibroImpreso_1 = require("./entities/LibroImpreso");
let autor1 = new Autor_1.Autor("Isaac", "Asimov");
let autor2 = new Autor_1.Autor("Richard", "Matheson");
let autor3 = new Autor_1.Autor("J.R.R.", "Tolkien");
let libro1 = new LibroImpreso_1.LibroImpreso("Yo,Robot", autor1);
let libro2 = new LibroImpreso_1.LibroImpreso("Soy Leyenda", autor2);
let libro3 = new LibroImpreso_1.LibroImpreso("El Señor de los Anillos", autor3);
const biblioteca = new Biblioteca_1.Biblioteca();
biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
biblioteca.agregarLibro(libro3);
biblioteca.mostrarCatalogo();
