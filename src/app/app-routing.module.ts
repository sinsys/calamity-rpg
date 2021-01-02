import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchComponent } from './scenes/launch/launch.component';
import { CharacterCreateComponent } from './scenes/character-create/character-create.component';
import { PlaygroundComponent } from './scenes/playground/playground.component';

const routes: Routes = [
  { path: '', component: LaunchComponent },
  { path: 'create', component: CharacterCreateComponent },
  { path: 'playground', component: PlaygroundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
