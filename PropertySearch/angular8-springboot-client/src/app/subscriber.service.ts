import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {
  private baseUrl = 'http://localhost:8091/ps';

  constructor(private http: HttpClient) { }

  loginAdmin(admin: Admin) {
    return this.http.post(`${this.baseUrl}/authenticate`, admin);
  }
  

  getAllBooks(): Observable<any> {
    return this.http.get(`${this.baseUrl}`,
    {headers:{"Authorization":"Bearer "+localStorage.getItem("token")}});
  }

  getBookById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  filterFirstName(fname: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/firstname?firstname='${fname}'`,
    {headers:{"Authorization":"Bearer "+localStorage.getItem("token")}});
  }

  createBook(subscriber: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, subscriber);
  }

  createSubscriber(subscriber: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, subscriber);
  }

  updateSubscriber(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }

  deleteSubscriber(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  getSubscriber(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
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

}