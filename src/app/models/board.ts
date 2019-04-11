import { Grid } from "./grid";

export class Board {
    playerName: string;

    rows: number;
    cols: number;

    unrevealedCells: number;
    availableFlags: number;
    mines: number;

    grid: Grid;

    constructor(rows: number, cols: number, mines: number) {
        this.rows = rows;
        this.cols = cols;
        this.unrevealedCells = rows * cols;
        
        this.mines = mines;
        this.availableFlags = mines;

        this.grid = new Grid(rows, cols);
    }
}
