import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HeaderComponent } from './components/header/header.component';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import { MovieNewComponent } from './components/movies/movie-new/movie-new.component';
import { RatingComponent } from './components/movies/rating/rating.component';
import { MovieItemComponent } from './components/movies/movies-list/movie-item/movie-item.component';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { MovieReviewComponent } from './components/movies/movie-details/movie-review/movie-review.component';
import { MovieCommentsComponent } from './components/movies/movie-comments/movie-comments.component';
import { CommentNewComponent } from './components/movies/movie-comments/comment-new/comment-new.component';
import { CommentItemComponent } from './components/movies/movie-comments/comment-item/comment-item.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    SharedModule,
    CoreModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
