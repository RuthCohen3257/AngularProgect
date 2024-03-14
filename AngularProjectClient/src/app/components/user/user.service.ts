import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseUrl = 'https://localhost:7064/api/User'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl)
  }
  // getByName(name: string): Observable<User> {
  //   return this.http.get<User>(`${this.baseUrl}/?name=${name}`);
  // }
  getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`)
  }
  addUser(user: User): Observable<User> {
    console.log(user)
    return this.http.post<User>(this.baseUrl, user);
  }

}
