import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from '../components/movies/movies-list/movies-list.component';
import { MovieItemComponent } from '../components/movies/movies-list/movie-item/movie-item.component';
import { MovieDetailsComponent } from '../components/movies/movie-details/movie-details.component';
import { MovieNewComponent } from '../components/movies/movie-new/movie-new.component';
import { RatingComponent } from '../components/movies/rating/rating.component';
import { MovieReviewComponent } from '../components/movies/movie-details/movie-review/movie-review.component';
import { MovieCommentsComponent } from '../components/movies/movie-comments/movie-comments.component';
import { CommentNewComponent } from '../components/movies/movie-comments/comment-new/comment-new.component';
import { CommentItemComponent } from '../components/movies/movie-comments/comment-item/comment-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesComponent } from './movies.component';


@NgModule({
  declarations: [
    MoviesListComponent,
    MovieItemComponent,
    MovieDetailsComponent,
    MovieNewComponent,
    RatingComponent,
    MovieReviewComponent,
    MovieCommentsComponent,
    CommentNewComponent,
    CommentItemComponent,
    MoviesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
