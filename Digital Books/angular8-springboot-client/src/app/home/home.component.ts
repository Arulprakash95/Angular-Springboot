import { Component, OnInit } from '@angular/core';
import { Subscriber } from '../subscriber';
import { Router } from '@angular/router';
import { SubscriberService } from '../subscriber.service';
import { Admin } from '../admin';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formdata: FormGroup = new FormGroup({});
  subscriber: Subscriber = new Subscriber();
  submitted = false;

  constructor(private subscriberService: SubscriberService,
    private router: Router) { }



  newSubscriber(): void {
    this.submitted = false;
    this.subscriber = new Subscriber();
  }

  save() {
    this.subscriberService.createSubscriber(this.subscriber)
      .subscribe(data => console.log(data), error => console.log(error));
    this.subscriber = new Subscriber();
   // this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
   // this.gotoList(); 
   this.onClickLogin
  }

  //gotoList() {
  //  this.router.navigate(['/authorbooks']);
  //}

  ngOnInit() {
    this.formdata = new FormGroup({
      username:new FormControl(""),
      password:new FormControl("")
    })
  }

  onClickLogin(data:Admin) {
    console.log("username=="+data.username+" password=="+data.password);
    this.subscriberService.loginAdmin(data).subscribe({
      next:(data:any)=>{
      localStorage.setItem("token",data.token);
      console.log("token=="+data.token)
      this.router.navigate(['/authorbooks'])
    }
    })
  }


}
