import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSubscriberComponent } from './create-subscriber/create-subscriber.component';
import { SubscriberDetailsComponent } from './subscriber-details/subscriber-details.component';
import { UpdateSubscriberComponent } from './update-subscriber/update-subscriber.component';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SearchFilterPipe } from './search-filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CreateSubscriberComponent,
    SubscriberDetailsComponent,
    UpdateSubscriberComponent,
    BookListComponent,
    HomeComponent,
    UserComponent,
    SearchFilterPipe,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
