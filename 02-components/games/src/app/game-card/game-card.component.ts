import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-game-card',
  imports: [],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css',
})
export class GameCardComponent {
  @Input() game!: Game;
  @Output() addToCart = new EventEmitter<Game>();
  @Output() deleteGame = new EventEmitter<number>(); // ste izluchvame id-to na igrata, za da znaem koi da iztriem

  onBuyClick() {
    this.addToCart.emit(this.game);
  } 

  onDeleteClick() {
    this.deleteGame.emit(this.game.id);
  }
  
}
