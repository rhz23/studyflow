export class Book {

  constructor(public title: string, public author: string, public theme: string, public startDate: Date, public actualPage: number, public totalPage: number) {
    this.title = title;
    this.author = author;
    this.theme = theme;
    this.startDate = startDate;
    this.totalPage = totalPage;
    this.actualPage = actualPage;
  }
}
