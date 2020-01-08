import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { PlayMovieComponent } from './components/play-movie/play-movie.component';
import { MetricsComponent } from './components/metrics/metrics.component';
import { MainSelectionComponent } from './components/main-selection/main-selection.component';


const routes: Routes = [
  // { path: 'login', component: Login },
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
  { path: '',
    redirectTo: '/main-selection',
    pathMatch: 'full'
  },
  { path: '**', component: MainSelectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
