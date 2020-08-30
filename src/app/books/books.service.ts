import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  book:any;
  booksChanged = new Subject<any[]>();

  books:any[]

  constructor(private http:HttpClient){ }

  getBooks(){
    return this.http.get<any>('http://localhost:3000/api/books/all')
    .pipe(map(books=>books),tap(books=>{
      this.books = books.data;
    }));
  }


  getBookById(id:number){
    return this.http.get<any>(`http://localhost:3000/api/books/${id}`).pipe(map(data => data.data[0]));
  }

  addBook(data:any){
    this.http.post<any>('http://localhost:3000/api/books/add',data).pipe(map(data=>data)).subscribe(data=>{
      this.getBooks().subscribe(data=>{
        this.booksChanged.next(data.data);
      })
    });
  }

  updateBook(id:number, data:any){
    this.http.put<any>(`http://localhost:3000/api/books/update/${id}`,data).pipe(map(data=>data)).subscribe(data=>{
      this.getBooks().subscribe(data=>{
        this.booksChanged.next(data.data);
      })
    })
  }

  deleteBook(id:number){
    this.http.delete<any>(`http://localhost:3000/api/books/delete/${id}`).pipe(map(data=>data)).subscribe(data=>{
      this.getBooks().subscribe(data=>{
        this.booksChanged.next(data.data);
      })
    })
  }

}
