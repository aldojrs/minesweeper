export class Cell {
    mine: boolean;
    revealed: boolean;
    cleaned: boolean;
    flagged: boolean;
    neighbours: number;
    content: string;

    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}