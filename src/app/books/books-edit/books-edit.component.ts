import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BooksService } from '../books.service';


@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.css']
})
export class BooksEditComponent implements OnInit {

  id:number;
  editMode = false;

  @ViewChild('f', {static:false}) bookEditForm : NgForm;

  constructor(private route: ActivatedRoute, private booksService: BooksService, private router:Router) { }

  ngOnInit() {

    this.route.params.subscribe((params: Params)=>{
      this.id = +params['id'];
      this.editMode = this.id?true:false;
      this.booksService.getBookById(this.id).subscribe((data)=>{
        this.bookEditForm.setValue({
          bookName : data.book_name,
          authorName : data.author_name,
          yearPublished : data.year_published,
          price : data.price
        })
      })
    });
  }

  onSubmit(f:NgForm){
    if(!this.editMode){
      this.booksService.addBook(f.value);
    }else{
      this.booksService.updateBook(this.id, f.value);
    }
    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo : this.route})
  }

}
