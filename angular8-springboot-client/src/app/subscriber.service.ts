import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {
  private baseUrl = 'http://localhost:8091/books';
  private auth='http://localhost:8091/';

  constructor(private http: HttpClient) { }

  authenticate(): Observable<any> {
    return this.http.get(`${this.auth}`);
  }

  getAllBooks(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getBookById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createBook(subscriber: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, subscriber);
  }

  deleteSubscriber(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }
  subscribeBook(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/reader/subscribe/${id}`, { responseType: 'text' });
  }

  unsubscribeBook(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/reader/unsubscribe/${id}`, { responseType: 'text' });
  }

  blockBook(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/author/block/${id}`, { responseType: 'text' });
  }

  unblockBook(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/author/unblock/${id}`, { responseType: 'text' });
  }

  


  createSubscriber(subscriber: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, subscriber);
  }

  updateSubscriber(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }



  getSubscriber(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  
}