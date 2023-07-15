import { Component, OnInit } from '@angular/core';
import { LivroService } from '../book.service';
import {Book} from "../model/book";

@Component({
  selector: 'app-books-card',
  templateUrl: './books-card.component.html',
  styleUrls: ['./books-card.component.css']
})
export class BooksCardComponent {
  livros: Book[] = [];

  constructor(private livroService: LivroService) {}

  ngOnInit(): void {
    this.livroService.getBooks().then((livros) => {
      this.livros = livros
    })
  }

}
