import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {
	CdkDrag,
	CdkDragDrop,
	CdkDropList,
	CdkDropListGroup,
	moveItemInArray,
	transferArrayItem
} from '@angular/cdk/drag-drop';
import {CdkContextMenuTrigger, CdkMenu, CdkMenuItem} from '@angular/cdk/menu';
import {NgStyle} from '@angular/common';
import {WidgetComponent} from './widget/widget.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, CdkDrag, CdkDropList, CdkDropListGroup, CdkContextMenuTrigger, CdkMenu, CdkMenuItem, NgStyle, WidgetComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	public availableRowsOptions = [
		{
			columns: 1,
			title: 'One column'
		},
		{
			columns: 2,
			title: 'Two columns'
		},
		{
			columns: 3,
			title: 'Three columns'
		},
		{
			columns: 4,
			title: 'Four columns'
		}
	]

	public availableColumnsOptions = [
		{
			color: '#ff0000',
			title: 'Red'
		},
		{
			color: '#00ff00',
			title: 'Green'
		},
		{
			color: '#0000ff',
			title: 'Blue'
		},
	]

	public selectedRows = [
		{
			columns: [
				null,
				null,
				null
			]
		},
		{
			columns: [
				null
			]
		},
		{
			columns: [
				null,
				null
			]
		}
	]

	public dropRow(event: CdkDragDrop<any>) {
		console.log(event)
		if (event.previousContainer !== event.container) {
			const draggedRow = this.availableRowsOptions[event.previousIndex]
			const preparedRow = {
				columns: Array.from({length: draggedRow.columns}, () => null)
			}
			console.log(preparedRow)
			this.insertToArray(this.selectedRows, event.currentIndex, preparedRow)
		} else {
			moveItemInArray(this.selectedRows, event.previousIndex, event.currentIndex)
		}
	}

	public dropCol(event: CdkDragDrop<any>, rowIndex: number) {
		console.log(event)
		if (event.previousContainer !== event.container) {
			if (event.container.element.nativeElement.classList.contains('row')) {
				transferArrayItem(
					event.previousContainer.data,
					event.container.data,
					event.previousIndex,
					event.currentIndex
				)
			}
		} else {
			moveItemInArray(this.selectedRows[rowIndex].columns, event.previousIndex, event.currentIndex)
		}
	}

	private insertToArray(arr: any[], index: number, newItem: any) {
		arr.splice(index, 0, newItem)
	}

	public changeCol(row: number, col: number, color: any) {
		this.selectedRows[row].columns[col] = color.color
		console.log(this.selectedRows)
	}
}
