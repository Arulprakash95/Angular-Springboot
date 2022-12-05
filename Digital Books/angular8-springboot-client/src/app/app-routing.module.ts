import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriberListComponent } from './subscriber-list/subscriber-list.component';
import { CreateSubscriberComponent } from './create-subscriber/create-subscriber.component';
import { UpdateSubscriberComponent } from './update-subscriber/update-subscriber.component';
import { SubscriberDetailsComponent } from './subscriber-details/subscriber-details.component';
import { SubscribeBookComponent } from './subscribe-book/subscribe-book.component';
import { UnsubscribeBookComponent } from './unsubscribe-book/unsubscribe-book.component';
import { BlockBookComponent } from './block-book/block-book.component';
import { UnblockBookComponent } from './unblock-book/unblock-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'authorbooks', component: BookListComponent },
  { path: 'readerbooks', component: SubscriberListComponent },
  { path: 'add', component: CreateSubscriberComponent },
  { path: 'update/:id', component: UpdateSubscriberComponent },
  { path: 'details/:id', component: SubscriberDetailsComponent },
  { path: 'reader/subscribe/:id', component: SubscribeBookComponent },
  { path: 'reader/unsubscribe/:id', component: UnsubscribeBookComponent },
  { path: 'author/block/:id', component: BlockBookComponent },
  { path: 'author/unblock/:id', component: UnblockBookComponent },
  { path: 'update/:id', component: UpdateSubscriberComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
