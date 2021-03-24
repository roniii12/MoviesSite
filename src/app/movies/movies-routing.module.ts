import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from '../components/movies/movies-list/movies-list.component';
import { MovieDetailsComponent } from '../components/movies/movie-details/movie-details.component';
import { MoviesComponent } from './movies.component';

const routes: Routes = [
  {path:'',component:MoviesComponent,children:[
    {path:'',component:MoviesListComponent},
    {path:'details/:id',component:MovieDetailsComponent},
    {path:'/:pageNumber',component:MoviesListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
