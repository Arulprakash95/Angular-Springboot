import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { SubscriberService } from "../subscriber.service";
import { Subscriber } from "../subscriber";
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscriber-list',
  templateUrl: './subscriber-list.component.html',
  styleUrls: ['./subscriber-list.component.css']
})
export class SubscriberListComponent implements OnInit {

  subscribers: Observable<Subscriber[]>;

  constructor(private subscriberService: SubscriberService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.subscribers = this.subscriberService.getAllBooks();
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

  subscribeBook(id: number) {
    this.subscriberService.subscribeBook(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  unsubscribeBook(id: number) {
    this.subscriberService.unsubscribeBook(id)
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
}