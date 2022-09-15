import { Component, OnInit } from '@angular/core';
import { Subscriber } from '../subscriber';
import { Router } from '@angular/router';
import { SubscriberService } from '../subscriber.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subscriber: Subscriber = new Subscriber();
  submitted = false;

  constructor(private subscriberService: SubscriberService,
    private router: Router) { }

  ngOnInit() {
  }

  newSubscriber(): void {
    this.submitted = false;
    this.subscriber = new Subscriber();
  }

  save() {
    this.subscriberService.createSubscriber(this.subscriber)
      .subscribe(data => console.log(data), error => console.log(error));
    this.subscriber = new Subscriber();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.gotoList();   
  }

  gotoList() {
    this.router.navigate(['/authorbooks']);
  }

}
