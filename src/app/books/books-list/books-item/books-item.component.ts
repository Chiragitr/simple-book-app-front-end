import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../../books.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-books-item',
  templateUrl: './books-item.component.html',
  styleUrls: ['./books-item.component.css']
})
export class BooksItemComponent implements OnInit {

  @Input() book : any;
  id:number;
  constructor(private booksService : BooksService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {

  }

  onDelete(id:number){
    console.log("onDelete");
    this.booksService.deleteBook(id)
    this.router.navigate(['../'],{relativeTo:this.route});
  }

  /* onClick(id:number){
    //console.log(id);
    this.booksService.getId.next(id);
  } */
}
