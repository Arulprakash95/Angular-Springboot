import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSubscriberComponent } from './create-subscriber/create-subscriber.component';
import { UpdateSubscriberComponent } from './update-subscriber/update-subscriber.component';
import { SubscriberDetailsComponent } from './subscriber-details/subscriber-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'propertylist', component: BookListComponent },
  { path: 'userview', component: UserComponent },
  { path: 'propertylist/add', component: CreateSubscriberComponent },
  { path: 'update/:id', component: UpdateSubscriberComponent },
  { path: 'details/:id', component: SubscriberDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
