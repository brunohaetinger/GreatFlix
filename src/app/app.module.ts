import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app-component/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppToolbarComponent } from './components/app-toolbar/app-toolbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MainSelectionComponent } from './components/main-selection/main-selection.component';
import { MoviesHorizontalListComponent } from './components/movies-horizontal-list/movies-horizontal-list.component';
import { MovieCardListComponent } from './components/movie-card-list/movie-card-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { PlayMovieComponent } from './components/play-movie/play-movie.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { TopUserListComponent } from './components/top-user-list/top-user-list.component';
import { MostWatchedGenresComponent } from './components/most-watched-genres/most-watched-genres.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { GenreCardListComponent } from './components/genre-card-list/genre-card-list.component';
import { GenreCardComponent } from './components/genre-card/genre-card.component';
import { MaterialModule } from './material.module';
import { LoginComponent } from './components/login/login.component';

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
    GenreCardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
