import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../book.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  bookService = new BookService;
  @Input() books:Book[] = [];
  @Input() showRemoveButton = false;

  ngOnInit(): void {
    // this.books = this.bookService.getBooks();
  }

  removeBook(book: Book) {
    this.bookService.removeBook(book).then((_) => this.bookService.getBooks().then((l) => this.books = l) );
  }

}
