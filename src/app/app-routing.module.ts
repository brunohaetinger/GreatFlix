import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { PlayMovieComponent } from './components/play-movie/play-movie.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { MainSelectionComponent } from './components/main-selection/main-selection.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { 
    path: '', 
    component: LoginComponent,
    pathMatch: 'full'
  },
  { 
    path: 'profile',
    component: ProfileComponent,
    data: { title:"Profile" },    
  },
  {
    path: 'play-movie/:id',
    component: PlayMovieComponent,
    data: { title:"Play Movie" },
  },
  {
    path: 'metrics',
    component: MetricsComponent,
    data: { title:"Metrics" },    
  },
  {
    path: 'main-selection',
    component: MainSelectionComponent,
    data: { title:"Main Selection" },    
  },
  { path: '**', component: MainSelectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
