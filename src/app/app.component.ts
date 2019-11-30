import { Component } from '@angular/core';
import { GameStatus } from './game-control/game-status.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public gameStatusCollection : GameStatus[] = [];

  public onGameTick(eventData : GameStatus) : void {
    this.gameStatusCollection.push(eventData);
  }
}
