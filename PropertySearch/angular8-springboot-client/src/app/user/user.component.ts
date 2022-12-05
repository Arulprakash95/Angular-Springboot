import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { SubscriberService } from "../subscriber.service";
import { Subscriber } from "../subscriber";
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscriber-list',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  subscribers: Observable<Subscriber[]>;

  constructor(private subscriberService: SubscriberService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.subscribers = this.subscriberService.getAllBooks();
  }

  subscriberDetails(id: number){
    this.router.navigate(['details', id]);
  }

  gotoList() {
    this.router.navigate(['/userview']);
  }
  filterfirstname(fname:string){
    this.subscribers = this.subscriberService.filterFirstName(fname);
  }
  
}