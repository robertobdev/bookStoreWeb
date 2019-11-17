import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksItemComponent } from './books-item/books-item.component';
import { BooksFormComponent } from './books-form/books-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BooksListComponent, BooksItemComponent, BooksFormComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }
