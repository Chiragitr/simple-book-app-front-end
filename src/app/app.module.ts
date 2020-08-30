import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BooksStartComponent } from './books/books-start/books-start.component';
import { BooksEditComponent } from './books/books-edit/books-edit.component';
import { BooksDetailComponent } from './books/books-detail/books-detail.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BooksItemComponent } from './books/books-list/books-item/books-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SortComponent } from './sort/sort.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BooksStartComponent,
    BooksEditComponent,
    BooksDetailComponent,
    BooksListComponent,
    BooksItemComponent,
    SortComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
