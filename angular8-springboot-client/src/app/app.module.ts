import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateSubscriberComponent } from './create-subscriber/create-subscriber.component';
import { SubscriberDetailsComponent } from './subscriber-details/subscriber-details.component';
import { SubscriberListComponent } from './subscriber-list/subscriber-list.component';
import { UpdateSubscriberComponent } from './update-subscriber/update-subscriber.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SubscribeBookComponent } from './subscribe-book/subscribe-book.component';
import { UnsubscribeBookComponent } from './unsubscribe-book/unsubscribe-book.component';
import { BlockBookComponent } from './block-book/block-book.component';
import { UnblockBookComponent } from './unblock-book/unblock-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateSubscriberComponent,
    SubscriberDetailsComponent,
    SubscriberListComponent,
    UpdateSubscriberComponent,
    SubscribeBookComponent,
    UnsubscribeBookComponent,
    BlockBookComponent,
    UnblockBookComponent,
    BookListComponent,
    HomeComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
