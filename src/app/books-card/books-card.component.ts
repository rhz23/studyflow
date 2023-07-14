import { Component } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books-card',
  templateUrl: './books-card.component.html',
  styleUrls: ['./books-card.component.css']
})
export class BooksCardComponent {
  books?: Book[];
  book!: Book;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

}

