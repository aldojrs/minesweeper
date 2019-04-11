import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Board } from '../../../models/board';

@Component({
	selector: 'score-panel',
	templateUrl: './scorepanel.component.html',
	styleUrls: ['./scorepanel.component.css']
})
export class ScorepanelComponent implements OnInit {

	@Input() board: Board;

	constructor(private gameService: GameService) { }

	ngOnInit() {
	}

	newGame() {
		this.gameService.resetGame();
	}
}
