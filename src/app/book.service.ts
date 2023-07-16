import { Injectable, OnInit } from '@angular/core';
import { Book } from './model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService implements OnInit {
  books: Book[] = [];

  //private livros: any[] = [];

  constructor() {

  }
  ngOnInit(): void {
    this.books = this.getBooks();
  }

  save(book: Book){}

  update(book: Book){}

  delete(title: string): boolean {
    this.books = this.books.filter((book) => {
      return book.title?.valueOf() != title?.valueOf();
    });
    return true;
  }

  isExist(value: string): boolean {
    for(let book of this.books) {
      if (book.title.toLocaleLowerCase()?.valueOf() == value.toLocaleLowerCase()) return true;
    }

    return false;
  }

  getBooks(): Book[] {
    this.books = JSON.parse(localStorage.getItem('books') || "") as Book[];
    return this.books;
  }

  addBooks(book: Book): void {
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  removeBook(book: Book) {
    // Find the index of the livro in the livros array
    const index = this.books.indexOf(book);

    // If the livro is found, remove it from the livros array
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  removeLivroByIndex(index: number): void {
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

}
