"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibroImpreso = void 0;
class LibroImpreso {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
    obtenerResumen() {
        return `${this.titulo} es un libro escrito por ${this.autor.nombre} ${this.autor.apellido}.`;
    }
}
exports.LibroImpreso = LibroImpreso;
