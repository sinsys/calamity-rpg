import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchComponent } from './scenes/launch/launch.component';
import { PlaygroundComponent } from './scenes/playground/playground.component';

const routes: Routes = [
  { path: '', component: LaunchComponent },
  { path: 'playground', component: PlaygroundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
