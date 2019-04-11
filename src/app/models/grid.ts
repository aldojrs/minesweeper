import { Cell } from "./cell";

export class Grid {
    cells: Array<Array<Cell>>;

    constructor(rows: number, cols: number) {
        this.cells = new Array<Array<Cell>>(rows);
        for(let i=0; i < this.cells.length; i++) {
            this.cells[i] = new Array<Cell>(cols)
            for(let j=0; j< this.cells[i].length; j++) {
                this.cells[i][j] = new Cell(i, j);
            }            
        }
    }
}