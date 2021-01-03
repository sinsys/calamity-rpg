import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchComponent } from './views/launch/launch.component';
import { CharacterCreateComponent } from './views/character-create/character-create.component';
import { GameEngine } from './game/game.engine';

const routes: Routes = [
  { path: '', component: LaunchComponent, data: { animation: 'Launch' } },
  { path: 'create', component: CharacterCreateComponent, data: { animation: 'Create' } },
  { path: 'game', component: GameEngine, data: { animation: 'Game' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
