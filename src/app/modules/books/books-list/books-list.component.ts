import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books = [];

  constructor(private bookService: BooksService) { }

  ngOnInit() {
    this.bookService.getBooks().then((books: any) => {
      this.books = books;
    }).catch((err) => {
      console.log(err);
    });
  }

}
