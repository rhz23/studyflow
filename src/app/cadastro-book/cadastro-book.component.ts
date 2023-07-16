import { BookService } from '../book.service';
import { Component, EventEmitter, Output, OnInit, ViewChild, Input } from '@angular/core';
import { Book } from '../model/book';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-book',
  templateUrl: './cadastro-book.component.html',
  styleUrls: ['./cadastro-book.component.css']
})
export class CadastroBookComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  @Output() bookAdded = new EventEmitter<Book>();

  book!: Book;
  books: Book[] = [];

  constructor(private router: Router, private bookService: BookService) {}

  ngOnInit(): void {
    //Shared.initializeWebStorage();
    this.book = new Book('','','',new Date,0,0,'');

    this.bookService.getBooks().then((books) => {
      this.books = books;
    })
  }

  titleValue: string = '';
  isTitleLabelActive: boolean = false;

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;


  // logicas de label
  onInputTitleChange(): void {
    this.isTitleLabelActive = this.book.title.length > 0;
  }

  authorValue: string = '';
  isAuthorLabelActive: boolean = false;

  onInputAuthorChange(): void {
    this.isAuthorLabelActive = this.book.author.length > 0;
  }

  themeValue: string = '';
  isThemeLabelActive: boolean = false;

  onInputThemeChange(): void {
    this.isThemeLabelActive = this.book.theme.length > 0;
  }

  dateValue: string = '';
  isDateLabelActive: boolean = false;

  onInputDateChange(): void {
    this.isDateLabelActive = this.book.startDate != null;
  }

  totalPageValue: string = '';
  isTotalPageLabelActive: boolean = false;

  onInputTotalPageChange(): void {
    this.isTotalPageLabelActive = this.book.totalPage > 0;
  }

  actualPageValue: string = '';
  isActualPageLabelActive: boolean = false;

  onInputActualPageChange(): void {
    this.isActualPageLabelActive = this.book.actualPage != 0;
  }

  //fim das logicas de label

  removeBook(book: Book) {
    // this.bookService.removeBook(book);
    this.bookService.removeBook(book).then((_) => this.bookService.getBooks().then((l) => this.books = l) );
  }

  // onSubmit() {
  //   console.log("onSubmit");
  //   this.isSubmitted = true;
  //   if (!this.bookService.isExist(this.book.title)) {
  //     this.bookService.addBooks(this.book);
  //   } else {
  //     this.bookService.update(this.book);
  //   }
  //   this.bookAdded.emit(this.book);
  //   this.isShowMessage = true;
  //   this.isSuccess = true;
  //   this.message = 'Cadastro realizado com sucesso!';
  //   this.form.reset();
  //   this.book = new Book('','','',new Date,0,0);
  //   this.books = this.bookService.getBooks();
  // }

  onEdit(book: Book) {
    let clone = Book.clone(book);
    this.book = clone;
  }

  onDelete(book: Book) {
    let confirmation = window.confirm('Você tem certeza que deseja remover ' + book.title);
    if (!confirmation) {
      return;
    }

    // let response: boolean = this.removeBook(book);
    // this.isShowMessage = true;
    // this.isSuccess = response;
    // if (response) {
    //   this.message = 'O livro foi removido com sucesso!';
    // } else {
    //   this.message = 'Opps! O item não pode ser removido!';
    // }
    // this.books = this.bookService.getBooks();
  }


  save() {
    // Lógica para salvar os livros no backend
    // const newBook = new Book(this.titleValue, this.authorValue, this.themeValue, new Date(this.dateValue), parseInt(this.actualPageValue) , parseInt(this.totalPageValue),"");

    this.bookService.addBook(this.book).then((_) => this.bookService.getBooks().then((l) => this.books = l));

    this.titleValue = '';
    this.authorValue = '';
    this.themeValue = '';
    this.dateValue = '';
    this.actualPageValue = '';
    this.totalPageValue = '';


  }

  cancel(): void {
    // Navigate back to books-card component
    this.router.navigate(['/books-card']);
  }

  saveActualPage(book: any) {
    book.actualPage = book.actualPage;
  }

}
