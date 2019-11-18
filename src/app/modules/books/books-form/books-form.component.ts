import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.css']
})
export class BooksFormComponent implements OnInit {

  public form: FormGroup;

  constructor(private activateRouter: ActivatedRoute) {
    this.form = new FormGroup({
      title: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100)
        ]
      )
    });
    console.log(this.activateRouter.snapshot.params.id);
    // this.title = this.id ? 'EDIÇÃO' : "NOVO";
  }
  ngOnInit() {
  }

}
