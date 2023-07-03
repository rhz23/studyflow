import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private livros: any[] = [];

  constructor() {}

  getLivros(): any[] {
    return this.livros;
  }

  addLivro(livro: any): void {
    this.livros.push(livro);
  }

  removeLivro(livro: any) {
    // Find the index of the livro in the livros array
    const index = this.livros.indexOf(livro);

    // If the livro is found, remove it from the livros array
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }

  removeLivroByIndex(index: number): void {
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }

}
