import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output()
  public ticked = new EventEmitter<number>();

  
  public tickCount = 0;

  private timeout;

  constructor() { }

  ngOnInit() {}

  public onGameStart() : void {
    this.tickCount = 0;

    this.timeout = setInterval(() => {
      console.log("Ticked " + this.tickCount++);
      this.ticked.emit(this.tickCount++);
    }, 1000);
  }

  public onGameStop() : void {
    clearInterval(this.timeout);
  }
}
