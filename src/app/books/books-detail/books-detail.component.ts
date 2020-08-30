import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BooksService } from '../books.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.css']
})
export class BooksDetailComponent implements OnInit {
  id: number;
  book: any;
  constructor(private booksService:BooksService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id = +params['id'];
      this.booksService.getBookById(this.id).subscribe(data=>{
      this.book = data;
    })
  })
  }

}
