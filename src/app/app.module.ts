import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomePageComponent } from './home-page/home-page.component';
import { MainSelectionComponent } from './main-selection/main-selection.component';
import { MoviesHorizontalListComponent } from './movies-horizontal-list/movies-horizontal-list.component';
import { MovieCardListComponent } from './movie-card-list/movie-card-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { PlayMovieComponent } from './play-movie/play-movie.component';
import { ProfileComponent } from './profile/profile.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { MetricsComponent } from './metrics/metrics.component';
import { TopUserListComponent } from './top-user-list/top-user-list.component';
import { MostWatchedGenresComponent } from './most-watched-genres/most-watched-genres.component';
import { UserCardComponent } from './user-card/user-card.component';
import { GenreCardListComponent } from './genre-card-list/genre-card-list.component';
import { GenreCardComponent } from './genre-card/genre-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    HomePageComponent,
    MainSelectionComponent,
    MoviesHorizontalListComponent,
    MovieCardListComponent,
    MovieCardComponent,
    PlayMovieComponent,
    ProfileComponent,
    UserAvatarComponent,
    MetricsComponent,
    TopUserListComponent,
    MostWatchedGenresComponent,
    UserCardComponent,
    GenreCardListComponent,
    GenreCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
