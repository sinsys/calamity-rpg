import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameEngine } from './game/game.engine';
import { LaunchComponent } from './scenes/launch/launch.component';
import { BackgroundComponent } from './components/layout/background/background.component';
import { PlaygroundComponent } from './scenes/playground/playground.component';
import { StatPanelComponent } from './components/character/stat-panel/stat-panel.component';
import { CharacterCreateComponent } from './scenes/character-create/character-create.component';

@NgModule({
  declarations: [
    AppComponent,
    GameEngine,
    LaunchComponent,
    BackgroundComponent,
    PlaygroundComponent,
    StatPanelComponent,
    CharacterCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
