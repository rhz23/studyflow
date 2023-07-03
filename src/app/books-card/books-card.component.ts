import { Component, OnInit } from '@angular/core';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-books-card',
  templateUrl: './books-card.component.html',
  styleUrls: ['./books-card.component.css']
})
export class BooksCardComponent {
  livros: any[] = [];

  constructor(private livroService: LivroService) {}

  ngOnInit(): void {
    this.livros = this.livroService.getLivros();
  }

}
