import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesJavascriptComponent } from './components/articles-javascript/articles-javascript.component';
import { ArticlesComponent } from './components/articles/articles.component';

const routes: Routes = [
  {path: 'articles', component: ArticlesComponent},
  {path: 'articles-javascript', component: ArticlesJavascriptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
