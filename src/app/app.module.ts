import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameEngine } from './game/game.engine';

import { LaunchComponent } from './scenes/launch/launch.component';
import { PlaygroundComponent } from './scenes/playground/playground.component';

import { BackgroundComponent } from './components/layout/background/background.component';
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
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
