import { Injectable } from '@angular/core';
import { Category } from '../../models/category.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public baseUrl = 'https://localhost:7064/api/Category'

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl)
  }
  getById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/${id}`)
  }
  addCategory(category: Category): Observable<Category> {
    console.log(category)
    return this.http.post<Category>(this.baseUrl, category);
  }
  deleteCategory(categoryId: number): Observable<Category> {
    return this.http.delete<Category>(`${this.baseUrl}/${categoryId}`);
  }
}
