import { Component, Input } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../book.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-books-card',
  templateUrl: './books-card.component.html',
  styleUrls: ['./books-card.component.css']
})
export class BooksCardComponent {
  @Input() books?:Book[];
  book!: Book;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

}

