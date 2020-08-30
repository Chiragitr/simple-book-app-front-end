import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BooksService } from '../books/books.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  config:any;
  books:any[];

  @Output() close = new EventEmitter<void>();
  constructor(private booksService:BooksService) { }

  ngOnInit() {
    this.booksService.getBooks().subscribe((data)=>{
      this.books = data.data;
      this.config['totalItems'] = this.books.length
    });

    this.config = {
      itemsPerPage: 4,
      currentPage: 1,
      //totalItems: this.books.length
    };
  }

  sort(text:string){
    let sortedArray = [...this.books];
    sortedArray.sort((a,b)=>a[text]-b[text]);
    this.books = [...sortedArray];
  }

  pageChanged(e){
    this.config.currentPage=e;
  }

  /* sortAccToYear(){
    let sortedArray = [...this.books];
    sortedArray.sort((a,b)=>a.price-b.price);
    //this.booksChanged.next(sortedArray);
    this.books = [...sortedArray];
  } */

  onClose(){
    this.close.emit();
  }
}
