export class Book {

  constructor(public title: string, public author: string, public theme: string, public startDate: Date, public actualPage: number, public totalPage: number) {
    this.title = title;
    this.author = author;
    this.theme = theme;
    this.startDate = startDate;
    this.totalPage = totalPage;
    this.actualPage = actualPage;
  }

  public static clone(book: Book) {
    let b: Book = new Book(book.title, book.author, book.theme, book.startDate, book.totalPage, book.actualPage);
    b.title = book.title;
    b.author = book.author;
    b.title = book.title;
    b.theme = book.theme;
    b.startDate = book.startDate;
    b.totalPage = book.totalPage;
    b.actualPage = book.actualPage;
    return b;
  }
}
