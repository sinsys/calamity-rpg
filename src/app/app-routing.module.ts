import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchComponent } from './views/launch/launch.component';
import { CharacterCreateComponent } from './views/character-create/character-create.component';
import { GameEngine } from './game/game.engine';

const routes: Routes = [
  { path: '', component: LaunchComponent },
  { path: 'create', component: CharacterCreateComponent },
  { path: 'game', component: GameEngine }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
