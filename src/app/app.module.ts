import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	MatDialogModule, MatButtonModule, MatCheckboxModule, MatMenuModule,
	MatIconModule, MatCardModule, MatToolbarModule, MatFormFieldModule
} from '@angular/material';


import 'hammerjs';

import { AppComponent, DialogCustomLevel } from './app.component';
import { BoardComponent } from './minesweeper/components/board/board.component';
import { GridComponent } from './minesweeper/components/grid/grid.component';
import { CellComponent } from './minesweeper/components/cell/cell.component';
import { ScorepanelComponent } from './minesweeper/components/scorepanel/scorepanel.component';

import { GameService } from './minesweeper/services/game.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		BoardComponent,
		GridComponent,
		CellComponent,
		ScorepanelComponent,
		DialogCustomLevel
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatCheckboxModule,
		MatMenuModule,
		MatIconModule,
		MatCardModule,
		MatToolbarModule,
		MatDialogModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule
	],
	providers: [
		GameService
	],
	entryComponents: [
		DialogCustomLevel
	],
	bootstrap: [AppComponent]
})
export class AppModule { }