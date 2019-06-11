import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsapiService } from '../../services/newsapi.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles$: Observable<any>;

  constructor(private newsapi: NewsapiService) { }

  ngOnInit() {
    this.articles$ = this.newsapi.getArticlesTechnology();
  }

}
