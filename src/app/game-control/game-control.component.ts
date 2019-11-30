import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { GameStatus } from './game-status.model';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output()
  public ticked = new EventEmitter<GameStatus>();

  public tickCount = 0;

  private timeout = null;

  constructor() { }

  ngOnInit() {}

  public onGameStart() : void {
    this.tickCount = 0;

    if (this.timeout == null) {
      this.timeout = setInterval(() => {
        this.ticked.emit(new GameStatus(++this.tickCount));
      }, 1000);
    }
  }

  public onGameStop() : void {
    if (this.timeout != null) {
      clearInterval(this.timeout);
      this.timeout = null;
    }
  }
}
