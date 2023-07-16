import { Injectable, OnInit } from '@angular/core';
import { Book } from './model/book';

@Injectable({
  providedIn: 'root'
})


export class BookService {

  private apiURL = "https://my-json-server.typicode.com/rhz23/studyflow"

  constructor() {}

  async getBooks(): Promise<Book[]> {
    try {
      const books = await fetch(this.apiURL).then(r => r.json());
      return books;
    } catch(error) {
      alert("Error:" + error);
      return [];
    }
  }

  // Returns the newly added book's index on the db
  async addBook(book: Book): Promise<any> {
    try {
      const r = await fetch(this.apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify(book)
      }).then(r => r.json());
      return r;
    } catch (error) {
      alert("Error:" + error);
      return null;
    }
  }


  async removeBook(book: Book): Promise<number> {
    try {
      const r = await fetch(this.apiURL + "/" + book.id, {
        method: "DELETE",
      });
      return r.status;
    } catch (error) {
      alert("Error:" + error);
      return 500;
    }
  }

}
