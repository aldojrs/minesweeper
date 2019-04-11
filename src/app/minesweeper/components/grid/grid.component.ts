import { Component, OnInit, Input } from '@angular/core';

import { Grid } from '../../../models/grid';
import { Cell } from '../../../models/cell';
import { GameService } from '../../services/game.service';

@Component({
	selector: 'grid',
	templateUrl: './grid.component.html',
	styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

	@Input() grid: Grid;

	constructor(private gameService: GameService) { }

	ngOnInit() {
	}

	handleReveal(cell: Cell) {
		if (cell.mine) {
			this.gameService.gameOver();
		} else {
			this.gameService.floodReveal(cell);
			this.gameService.checkWin();
		}
	}

	handleFlag(cell: Cell) {
		this.gameService.flag(cell);
	}
}