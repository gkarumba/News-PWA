import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  apiKey = '489dfd09878b4cb4b22b969c0f0e8e0b';

  constructor(private http: HttpClient) { }

  getArticlesTechnology(): Observable<any> {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?category=technology&language=en&country=us&apiKey=' + this.apiKey
    ).pipe(map((data: any) => data.articles));
  }
  getArticlesJavascript(): Observable<any> {
    return this.http.get(
      'https://newsapi.org/v2/everything?q=javascript&sortBy=latest&apiKey=' + this.apiKey
    ).pipe(map((data: any) => data.articles));
  }
}
