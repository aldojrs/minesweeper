import { Injectable } from '@angular/core';
import { Board } from '../../models/board';
import { Cell } from '../../models/cell';

@Injectable()
export class GameService {

	private board: Board;

	constructor() { }

	createBoard(rows: number, cols: number, mineNumber: number) {
		this.board = new Board(rows, cols, mineNumber);

		this.inizializeGame(mineNumber);
	}

	getBoard(): Board {
		return this.board;
	}

	resetGame() {

		this.board.unrevealedCells = this.board.rows * this.board.cols;
		this.board.availableFlags = this.board.mines;

		for (let i = 0; i < this.board.rows; i++) {
			for (let j = 0; j < this.board.cols; j++) {
				this.board.grid.cells[i][j] = new Cell(i, j);
			}
		}

		this.inizializeGame(this.board.mines);
	}

	// If there are no mine around
	floodReveal(cell: Cell) {

		if (!cell.flagged && !cell.revealed && !cell.mine) {
			cell.revealed = true;
			this.board.unrevealedCells--;

			if (!cell.neighbours) {
				for (let i = -1; i < 2; i++) {
					for (let j = -1; j < 2; j++) {

						let x = cell.x + i;
						let y = cell.y + j;

						if (this.board.grid.cells[x] && this.board.grid.cells[x][y]) {
							this.floodReveal(this.board.grid.cells[x][y]);
						}
					}
				}
			}
		}
	}

	checkWin() {
		if (this.board.unrevealedCells === this.board.mines) {
			for (let i = 0; i < this.board.rows; i++) {
				for (let j = 0; j < this.board.cols; j++) {
					this.board.grid.cells[i][j].revealed = true;
					this.board.grid.cells[i][j].flagged = false;
					if (this.board.grid.cells[i][j].mine) {
						this.board.grid.cells[i][j].cleaned = true;
					}
				}
			}
			alert("YOU WIN!");
		}
	}

	gameOver() {
		for (let i = 0; i < this.board.rows; i++) {
			for (let j = 0; j < this.board.cols; j++) {
				this.board.grid.cells[i][j].revealed = true;
				this.board.grid.cells[i][j].flagged = false;
			}
		}

		alert("YOU LOSE!");
	}

	flag(cell: Cell) {
		if (cell.flagged) {
			this.board.availableFlags++
			cell.flagged = false;
		} else if (this.board.availableFlags > 0) {
			this.board.availableFlags--
			cell.flagged = true;
		}
	}

	private inizializeGame(mineNumber: number) {
		this.setmines(mineNumber);

		// Pre-count the numer of neighbours per cell
		for (let i = 0; i < this.board.rows; i++) {
			for (let j = 0; j < this.board.cols; j++) {
				this.board.grid.cells[i][j].neighbours = this.countNeighbours(this.board.grid.cells[i][j]);
			}
		}
	}

	private setmines(n: number) {
		let availablePositions = [];
		for (let i = 0; i < this.board.rows; i++) {
			for (let j = 0; j < this.board.cols; j++) {
				availablePositions.push({ x: i, y: j });
			}
		}

		for (let i = 0; i < n; i++) {
			let index = Math.floor(Math.random() * availablePositions.length);
			let position = availablePositions[index];

			this.board.grid.cells[position.x][position.y].mine = true;

			availablePositions.splice(index, 1);
		}
	}

	private countNeighbours(cell: Cell): number {

		let neighbours = 0;

		for (let i = -1; i < 2; i++) {
			for (let j = -1; j < 2; j++) {

				let x = cell.x + i;
				let y = cell.y + j;

				if (this.board.grid.cells[x] && this.board.grid.cells[x][y] && this.board.grid.cells[x][y].mine) {
					neighbours = neighbours + 1;
				}
			}
		}

		return neighbours;
	}

}
