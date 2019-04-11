import { Component, Inject } from '@angular/core';
import { Board } from './models/board';
import { GameService } from './minesweeper/services/game.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
	rows: number;
	cols: number;
	mineNumber: number;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	public board: Board;
	public level: String;

	constructor(private gameService: GameService, public dialog: MatDialog) {

		this.easy();
	}

	easy(): void {
		this.level = "Easy Level";
		this.gameService.createBoard(8, 8, 10);
		this.board = this.gameService.getBoard();
	}

	medium(): void {
		this.level = "Medium Level";
		this.gameService.createBoard(15, 15, 25);
		this.board = this.gameService.getBoard();
	}

	hard(): void {
		this.level = "Hard Level";
		this.gameService.createBoard(20, 20, 35);
		this.board = this.gameService.getBoard();
	}

	openCustomDialog(): void {
		const dialogRef = this.dialog.open(DialogCustomLevel, {
			width: '250px',
			data: { rows: null, cols: null, mineNumber: null }
		});

		dialogRef.afterClosed().subscribe(result => {
			this.level = "Custom Level";
			this.gameService.createBoard(result.rows, result.cols, result.mineNumber);
			this.board = this.gameService.getBoard();
		});
	}

}

@Component({
	selector: 'dialog-custom-level',
	templateUrl: 'dialog-custom-level.html',
})
export class DialogCustomLevel {

	constructor(
		public dialogRef: MatDialogRef<DialogCustomLevel>,
		@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

	onNoClick(): void {
		this.dialogRef.close();
	}

}
