import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.css']
})
export class BooksFormComponent implements OnInit {

  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      title: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100)
        ]
      )
    });
  }

  ngOnInit() {
  }

}
