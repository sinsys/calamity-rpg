import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameEngine } from './game.engine';

describe('GameEngine', () => {
  let component: GameEngine;
  let fixture: ComponentFixture<GameEngine>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameEngine ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameEngine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
