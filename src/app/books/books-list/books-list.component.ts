import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  config:any;
  books:any;
  sortComponentFlag = false;

  constructor(private booksService:BooksService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.booksService.booksChanged.subscribe(data=>{
      this.books = data;
      this.config['totalItems'] = this.books.length
    })
    this.booksService.getBooks().subscribe(data=>{
      this.books = data.data;
      this.config['totalItems'] = this.books.length
    });

    this.config = {
      itemsPerPage: 4,
      currentPage: 1,
      //totalItems: this.books.length
    };
  }
  onAddNewBook(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  onSort(){
    this.sortComponentFlag=true;
  }


  pageChanged(e){
    this.config.currentPage = e;
  }
  onHandle(){
    this.sortComponentFlag=false;
    //this.booksService.booksChanged.next(this.books);
    this.router.navigate(['../books'], {relativeTo: this.route});
  }

}
