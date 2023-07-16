import { BookService } from './../book.service';
import { Component,OnInit } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})
export class LandPageComponent implements OnInit {
  isHidePanel = true;
  // books?: Book[];
  // bookService = new BookService;

  constructor() {}

  ngOnInit(): void {
    // this.books = this.bookService.getBooks();

  }

  togglePanel(): void {
    this.isHidePanel = !this.isHidePanel;
  }

}
