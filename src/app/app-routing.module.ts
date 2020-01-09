import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./components/profile/profile.component";
import { PlayMovieComponent } from "./components/play-movie/play-movie.component";
import { MetricsComponent } from "./components/metrics/metrics.component";
import { MainSelectionComponent } from "./components/main-selection/main-selection.component";
import { CanActivateGuard } from "./guards/CanActivateGuard";

const routes: Routes = [
  {
    path: "",
    component: MainSelectionComponent,
    data: { title: "Main Selection" },
    canActivate: [CanActivateGuard]
  },
  {
    path: "profile",
    component: ProfileComponent,
    data: { title: "Profile" },
    canActivate: [CanActivateGuard]
  },
  {
    path: "play-movie/:id",
    component: PlayMovieComponent,
    data: { title: "Play Movie" },
    canActivate: [CanActivateGuard]
  },
  {
    path: "metrics",
    component: MetricsComponent,
    data: { title: "Metrics" },
    canActivate: [CanActivateGuard]
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
