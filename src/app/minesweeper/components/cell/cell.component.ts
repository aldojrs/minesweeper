import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Cell } from '../../../models/cell';

@Component({
	selector: 'cell',
	templateUrl: './cell.component.html',
	styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

	@Input() cell: Cell;
	@Output() reveal: EventEmitter<Cell> = new EventEmitter<Cell>();
	@Output() flag: EventEmitter<Cell> = new EventEmitter<Cell>();

	public textStyle: any;

	constructor() { }

	ngOnInit() {
		if (!this.cell.mine) {
			this.cell.content = this.cell.neighbours ? this.cell.neighbours + '' : '';
		}

		switch (this.cell.neighbours) {
			case 1:
				this.textStyle = { 'color': 'blue' };
				break;
			case 2:
				this.textStyle = { 'color': 'green' };
				break;
			case 3:
				this.textStyle = { 'color': 'red' };
				break;
			case 4:
				this.textStyle = { 'color': 'darkblue' };
				break;
			default:
				break;
		}
	}

	handleReveal() {
		if (!this.cell.flagged) {
			this.reveal.emit(this.cell);
		}
	}

	handleFlag() {
		this.flag.emit(this.cell);
		return false;
	}
}
