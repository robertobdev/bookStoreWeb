import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  book = {
    id: 1,
    price: 35.00,
    title: 'O Senhor dos Anéis: A Sociedade do Anel',
    author: 'J.R.R. Tolkien',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81SWBRKfExL.jpg'
  };
  constructor() { }

  ngOnInit() {
  }

}
