import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BooksStartComponent } from './books/books-start/books-start.component';
import { BooksDetailComponent } from './books/books-detail/books-detail.component';
import { BooksEditComponent } from './books/books-edit/books-edit.component';
import { SortComponent } from './sort/sort.component';

const routes: Routes = [
  {path:'', redirectTo:'/books', pathMatch:'full'},
  {path:'books', component: BooksComponent, children:[
      {path:'', component: BooksStartComponent},
      {path:'new', component: BooksEditComponent},
      {path:':id', component: BooksDetailComponent},
      {path:':id/edit', component: BooksEditComponent},
    ]
  },
  {path:'sort', component:SortComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
