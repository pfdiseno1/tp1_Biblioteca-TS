/*4. Crea un archivo index.ts:
   - En este archivo, importa las clases y interfaces necesarias de los archivos anteriores.
   - Crea instancias de objetos para representar autores y libros.
   - Crea una instancia de la biblioteca.
   - Agrega algunos libros a la biblioteca usando el método agregarLibro.
   - Muestra el catálogo de la biblioteca usando el método mostrarCatalogo.*/
   
   import { Autor } from './entities/Autor';
   import { Biblioteca } from './entities/Biblioteca';
   import { LibroImpreso } from './entities/LibroImpreso';
   
   let autor1 = new Autor("Isaac", "Asimov");
   let autor2 = new Autor("Richard", "Matheson");
   let autor3 = new Autor("J.R.R.", "Tolkien");
   let autor4 = new Autor("Pipo Pescador", "Vamos de Paseo");
   
   let libro1 = new LibroImpreso("Yo,Robot", autor1);
   let libro2 = new LibroImpreso("Soy Leyenda", autor2 );
   let libro3 = new LibroImpreso("El Señor de los Anillos", autor3);
   let libro4 = new LibroImpreso("Pipo Pescador", autor4 );

   const biblioteca = new Biblioteca()
   biblioteca.agregarLibro(libro1);
   biblioteca.agregarLibro(libro2);
   biblioteca.agregarLibro(libro3);
   biblioteca.agregarLibro(libro4)

   biblioteca.mostrarCatalogo()
   
   

