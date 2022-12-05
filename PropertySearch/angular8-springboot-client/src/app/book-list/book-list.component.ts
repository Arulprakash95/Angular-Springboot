import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { SubscriberService } from "../subscriber.service";
import { Subscriber } from "../subscriber";
import { Router } from '@angular/router';


@Component({
  selector: 'app-subscriber-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
searchText:string;
  subscribers: Observable<Subscriber[]>;

  constructor(private subscriberService: SubscriberService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.subscribers = this.subscriberService.getAllBooks();
  }


  filterfirstname(fname:string){
    this.subscribers = this.subscriberService.filterFirstName(fname);
  }

  


  deleteSubscriber(id: number) {
    this.subscriberService.deleteSubscriber(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }



  
  subscriberDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateSubscriber(id: number){
    this.router.navigate(['update', id]);
  }



}