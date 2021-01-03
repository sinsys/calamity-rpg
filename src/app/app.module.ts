import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GameEngine } from './game/game.engine';

import { LaunchComponent } from './views/launch/launch.component';
import { CharacterCreateComponent } from './views/character-create/character-create.component';

import { BackgroundComponent } from './components/layout/background/background.component';
import { StatPanelComponent } from './components/character/stat-panel/stat-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    GameEngine,
    LaunchComponent,
    BackgroundComponent,
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
